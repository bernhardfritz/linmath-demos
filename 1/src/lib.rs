extern crate linmath;

use js_sys::WebAssembly;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use web_sys::{WebGlProgram, WebGlRenderingContext, WebGlShader};

use linmath::*;

#[wasm_bindgen]
pub struct Renderer {
    context: web_sys::WebGlRenderingContext,
    program: web_sys::WebGlProgram,
    u_matrix: web_sys::WebGlUniformLocation,
}

#[wasm_bindgen]
impl Renderer {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Result<Renderer, JsValue> {
        let document = web_sys::window().unwrap().document().unwrap();
        let canvas = document.get_element_by_id("canvas").unwrap();
        let canvas: web_sys::HtmlCanvasElement = canvas.dyn_into::<web_sys::HtmlCanvasElement>()?;

        let context = canvas
            .get_context("webgl")?
            .unwrap()
            .dyn_into::<WebGlRenderingContext>()?;

        let vert_shader = compile_shader(
            &context,
            WebGlRenderingContext::VERTEX_SHADER,
            r#"
            attribute vec2 a_position;
            uniform mat3 u_matrix;
            void main() {
                gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
            }
        "#,
        )?;
        let frag_shader = compile_shader(
            &context,
            WebGlRenderingContext::FRAGMENT_SHADER,
            r#"
            void main() {
                gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
            }
        "#,
        )?;
        let program = link_program(&context, &vert_shader, &frag_shader)?;
        context.use_program(Some(&program));

        let a_position = context.get_attrib_location(&program, "a_position");

        let vertices: [f32; 36] = [
            // left column
            0.0, 0.0, 30.0, 0.0, 0.0, 150.0, 0.0, 150.0, 30.0, 0.0, 30.0, 150.0,
            // top rung
            30.0, 0.0, 100.0, 0.0, 30.0, 30.0, 30.0, 30.0, 100.0, 0.0, 100.0, 30.0,
            // middle rung
            30.0, 60.0, 67.0, 60.0, 30.0, 90.0, 30.0, 90.0, 67.0, 60.0, 67.0, 90.0,
        ];
        let memory_buffer = wasm_bindgen::memory()
            .dyn_into::<WebAssembly::Memory>()?
            .buffer();
        let vertices_location = vertices.as_ptr() as u32 / 4;
        let vert_array = js_sys::Float32Array::new(&memory_buffer)
            .subarray(vertices_location, vertices_location + vertices.len() as u32);

        let buffer = context.create_buffer().ok_or("failed to create buffer")?;
        context.bind_buffer(WebGlRenderingContext::ARRAY_BUFFER, Some(&buffer));
        context.buffer_data_with_array_buffer_view(
            WebGlRenderingContext::ARRAY_BUFFER,
            &vert_array,
            WebGlRenderingContext::STATIC_DRAW,
        );
        context.vertex_attrib_pointer_with_i32(
            a_position as u32,
            2,
            WebGlRenderingContext::FLOAT,
            false,
            0,
            0,
        );
        context.enable_vertex_attrib_array(a_position as u32);

        let u_matrix = context.get_uniform_location(&program, "u_matrix").unwrap();

        Ok(Renderer {
            context,
            program,
            u_matrix,
        })
    }

    #[wasm_bindgen]
    pub fn render(&self, tx: f32, ty: f32, rad: f32, sx: f32, sy: f32) {
        let m: Matrix3<f32> = Matrix3::ortho(0.0, 150.0, 150.0, 0.0);
        let m = m * Matrix3::translate(&Vector2::new(tx, ty));
        let m = m * Matrix3::rotate(rad);
        let m = m * Matrix3::scale(&Vector2::new(sx, sy));
        let m = m * Matrix3::translate(&Vector2::new(-50.0, -75.0));
        let m_t = unsafe { std::mem::transmute::<Matrix3<f32>, [f32; 9]>(m) };
        self.context
            .uniform_matrix3fv_with_f32_array(Some(&self.u_matrix), false, &m_t);

        self.context.clear_color(0.0, 0.0, 0.0, 1.0);
        self.context.clear(WebGlRenderingContext::COLOR_BUFFER_BIT);

        self.context
            .draw_arrays(WebGlRenderingContext::TRIANGLES, 0, 18);
    }
}

pub fn compile_shader(
    context: &WebGlRenderingContext,
    shader_type: u32,
    source: &str,
) -> Result<WebGlShader, String> {
    let shader = context
        .create_shader(shader_type)
        .ok_or_else(|| String::from("Unable to create shader object"))?;
    context.shader_source(&shader, source);
    context.compile_shader(&shader);

    if context
        .get_shader_parameter(&shader, WebGlRenderingContext::COMPILE_STATUS)
        .as_bool()
        .unwrap_or(false)
    {
        Ok(shader)
    } else {
        Err(context
            .get_shader_info_log(&shader)
            .unwrap_or_else(|| String::from("Unknown error creating shader")))
    }
}

pub fn link_program(
    context: &WebGlRenderingContext,
    vert_shader: &WebGlShader,
    frag_shader: &WebGlShader,
) -> Result<WebGlProgram, String> {
    let program = context
        .create_program()
        .ok_or_else(|| String::from("Unable to create shader object"))?;

    context.attach_shader(&program, vert_shader);
    context.attach_shader(&program, frag_shader);
    context.link_program(&program);

    if context
        .get_program_parameter(&program, WebGlRenderingContext::LINK_STATUS)
        .as_bool()
        .unwrap_or(false)
    {
        Ok(program)
    } else {
        Err(context
            .get_program_info_log(&program)
            .unwrap_or_else(|| String::from("Unknown error creating program object")))
    }
}

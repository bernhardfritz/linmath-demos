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
            attribute vec4 a_position;
            attribute vec4 a_color;

            uniform mat4 u_matrix;

            varying vec4 v_color;

            void main() {
                gl_Position = u_matrix * a_position;
                v_color = a_color;
            }
        "#,
        )?;
        let frag_shader = compile_shader(
            &context,
            WebGlRenderingContext::FRAGMENT_SHADER,
            r#"
            precision mediump float;

            varying vec4 v_color;

            void main() {
                gl_FragColor = v_color;
            }
        "#,
        )?;
        let program = link_program(&context, &vert_shader, &frag_shader)?;
        context.use_program(Some(&program));

        let vertices: [f32; 288] = [
            // left column front
            0.0, 0.0, 0.0,
            0.0, 150.0, 0.0,
            30.0, 0.0, 0.0,
            0.0, 150.0, 0.0,
            30.0, 150.0, 0.0,
            30.0, 0.0, 0.0,

            // top rung front
            30.0, 0.0, 0.0,
            30.0, 30.0, 0.0,
            100.0, 0.0, 0.0,
            30.0, 30.0, 0.0,
            100.0, 30.0, 0.0,
            100.0, 0.0, 0.0,

            // middle rung front
            30.0, 60.0, 0.0,
            30.0, 90.0, 0.0,
            67.0, 60.0, 0.0,
            30.0, 90.0, 0.0,
            67.0, 90.0, 0.0,
            67.0, 60.0, 0.0,

            // left column back
            0.0, 0.0, -30.0,
            30.0, 0.0, -30.0,
            0.0, 150.0, -30.0,
            0.0, 150.0, -30.0,
            30.0, 0.0, -30.0,
            30.0, 150.0, -30.0,

            // top rung back
            30.0, 0.0, -30.0,
            100.0, 0.0, -30.0,
            30.0, 30.0, -30.0,
            30.0, 30.0, -30.0,
            100.0, 0.0, -30.0,
            100.0, 30.0, -30.0,

            // middle rung back
            30.0, 60.0, -30.0,
            67.0, 60.0, -30.0,
            30.0, 90.0, -30.0,
            30.0, 90.0, -30.0,
            67.0, 60.0, -30.0,
            67.0, 90.0, -30.0,

            // top
            0.0, 0.0, 0.0,
            100.0, 0.0, 0.0,
            100.0, 0.0, -30.0,
            0.0, 0.0, 0.0,
            100.0, 0.0, -30.0,
            0.0, 0.0, -30.0,

            // top rung right
            100.0, 0.0, 0.0,
            100.0, 30.0, 0.0,
            100.0, 30.0, -30.0,
            100.0, 0.0, 0.0,
            100.0, 30.0, -30.0,
            100.0, 0.0, -30.0,

            // under top rung
            30.0, 30.0, 0.0,
            30.0, 30.0, -30.0,
            100.0, 30.0, -30.0,
            30.0, 30.0, 0.0,
            100.0, 30.0, -30.0,
            100.0, 30.0, 0.0,

            // between top rung and middle
            30.0, 30.0, 0.0,
            30.0, 60.0, -30.0,
            30.0, 30.0, -30.0,
            30.0, 30.0, 0.0,
            30.0, 60.0, 0.0,
            30.0, 60.0, -30.0,

            // top of middle rung
            30.0, 60.0, 0.0,
            67.0, 60.0, -30.0,
            30.0, 60.0, -30.0,
            30.0, 60.0, 0.0,
            67.0, 60.0, 0.0,
            67.0, 60.0, -30.0,

            // right of middle rung
            67.0, 60.0, 0.0,
            67.0, 90.0, -30.0,
            67.0, 60.0, -30.0,
            67.0, 60.0, 0.0,
            67.0, 90.0, 0.0,
            67.0, 90.0, -30.0,

            // bottom of middle rung.
            30.0, 90.0, 0.0,
            30.0, 90.0, -30.0,
            67.0, 90.0, -30.0,
            30.0, 90.0, 0.0,
            67.0, 90.0, -30.0,
            67.0, 90.0, 0.0,

            // right of bottom
            30.0, 90.0, 0.0,
            30.0, 150.0, -30.0,
            30.0, 90.0, -30.0,
            30.0, 90.0, 0.0,
            30.0, 150.0, 0.0,
            30.0, 150.0, -30.0,

            // bottom
            0.0, 150.0, 0.0,
            0.0, 150.0, -30.0,
            30.0, 150.0, -30.0,
            0.0, 150.0, 0.0,
            30.0, 150.0, -30.0,
            30.0, 150.0, 0.0,

            // left side
            0.0, 0.0, 0.0,
            0.0, 0.0, -30.0,
            0.0, 150.0, -30.0,
            0.0, 0.0, 0.0,
            0.0, 150.0, -30.0,
            0.0, 150.0, 0.0
        ];
        let vertices_memory_buffer = wasm_bindgen::memory()
            .dyn_into::<WebAssembly::Memory>()?
            .buffer();
        let vertices_location = vertices.as_ptr() as u32 / 4;
        let vert_array = js_sys::Float32Array::new(&vertices_memory_buffer)
            .subarray(vertices_location, vertices_location + vertices.len() as u32);

        let colors: [u8; 288] = [
            // left column front
            200, 70, 120,
            200, 70, 120,
            200, 70, 120,
            200, 70, 120,
            200, 70, 120,
            200, 70, 120,

            // top rung front
            200, 70, 120,
            200, 70, 120,
            200, 70, 120,
            200, 70, 120,
            200, 70, 120,
            200, 70, 120,

            // middle rung front
            200, 70, 120,
            200, 70, 120,
            200, 70, 120,
            200, 70, 120,
            200, 70, 120,
            200, 70, 120,

            // left column back
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,

            // top rung back
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,

            // middle rung back
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,
            80, 70, 200,

            // top
            70, 200, 210,
            70, 200, 210,
            70, 200, 210,
            70, 200, 210,
            70, 200, 210,
            70, 200, 210,

            // top rung right
            200, 200, 70,
            200, 200, 70,
            200, 200, 70,
            200, 200, 70,
            200, 200, 70,
            200, 200, 70,

            // under top rung
            210, 100, 70,
            210, 100, 70,
            210, 100, 70,
            210, 100, 70,
            210, 100, 70,
            210, 100, 70,

            // between top rung and middle
            210, 160, 70,
            210, 160, 70,
            210, 160, 70,
            210, 160, 70,
            210, 160, 70,
            210, 160, 70,

            // top of middle rung
            70, 180, 210,
            70, 180, 210,
            70, 180, 210,
            70, 180, 210,
            70, 180, 210,
            70, 180, 210,

            // right of middle rung
            100, 70, 210,
            100, 70, 210,
            100, 70, 210,
            100, 70, 210,
            100, 70, 210,
            100, 70, 210,

            // bottom of middle rung.
            76, 210, 100,
            76, 210, 100,
            76, 210, 100,
            76, 210, 100,
            76, 210, 100,
            76, 210, 100,

            // right of bottom
            140, 210, 80,
            140, 210, 80,
            140, 210, 80,
            140, 210, 80,
            140, 210, 80,
            140, 210, 80,

            // bottom
            90, 130, 110,
            90, 130, 110,
            90, 130, 110,
            90, 130, 110,
            90, 130, 110,
            90, 130, 110,

            // left side
            160, 160, 220,
            160, 160, 220,
            160, 160, 220,
            160, 160, 220,
            160, 160, 220,
            160, 160, 220
        ];
        let colors_memory_buffer = wasm_bindgen::memory()
            .dyn_into::<WebAssembly::Memory>()?
            .buffer();
        let colors_location = colors.as_ptr() as u32 / 1;
        let colr_array = js_sys::Uint8Array::new(&colors_memory_buffer)
            .subarray(colors_location, colors_location + colors.len() as u32);
        web_sys::console::log_1(&colr_array);

        let a_position = context.get_attrib_location(&program, "a_position");
        context.enable_vertex_attrib_array(a_position as u32);
        let position_buffer = context.create_buffer().ok_or("failed to create buffer")?;
        context.bind_buffer(WebGlRenderingContext::ARRAY_BUFFER, Some(&position_buffer));
        context.buffer_data_with_array_buffer_view(
            WebGlRenderingContext::ARRAY_BUFFER,
            &vert_array,
            WebGlRenderingContext::STATIC_DRAW,
        );
        context.vertex_attrib_pointer_with_i32(
            a_position as u32,
            3,
            WebGlRenderingContext::FLOAT,
            false,
            0,
            0,
        );

        let a_color = context.get_attrib_location(&program, "a_color");
        context.enable_vertex_attrib_array(a_color as u32);
        let color_buffer = context.create_buffer().ok_or("failed to create buffer")?;
        context.bind_buffer(WebGlRenderingContext::ARRAY_BUFFER, Some(&color_buffer));
        context.buffer_data_with_array_buffer_view(
            WebGlRenderingContext::ARRAY_BUFFER,
            &colr_array,
            WebGlRenderingContext::STATIC_DRAW,
        );
        context.vertex_attrib_pointer_with_i32(
            a_color as u32,
            3,
            WebGlRenderingContext::UNSIGNED_BYTE,
            true,
            0,
            0,
        );

        let u_matrix = context.get_uniform_location(&program, "u_matrix").unwrap();

        Ok(Renderer {
            context,
            program,
            u_matrix,
        })
    }

    #[wasm_bindgen]
    pub fn render(&self, tx: f32, ty: f32, tz: f32, radX: f32, radY: f32, radZ: f32, sx: f32, sy: f32, sz: f32) {
        let m: Matrix4<f32> = Matrix4::ortho(0.0, 275.0, 275.0, 0.0, 0.0, 275.0);
        let m = m * Matrix4::translate(&Vector3::new(tx, ty, tz));
        let m = m * Matrix4::rotate(radX, &Vector3::new(1.0, 0.0, 0.0));
        let m = m * Matrix4::rotate(radY, &Vector3::new(0.0, 1.0, 0.0));
        let m = m * Matrix4::rotate(radZ, &Vector3::new(0.0, 0.0, 1.0));
        let m = m * Matrix4::scale(&Vector3::new(sx, sy, sz));
        let m = m * Matrix4::translate(&Vector3::new(-50.0, -75.0, 15.0));
        let m_t = unsafe { std::mem::transmute::<Matrix4<f32>, [f32; 16]>(m) };
        self.context
            .uniform_matrix4fv_with_f32_array(Some(&self.u_matrix), false, &m_t);

        self.context.clear_color(0.0, 0.0, 0.0, 1.0);
        self.context.clear(WebGlRenderingContext::COLOR_BUFFER_BIT | WebGlRenderingContext::DEPTH_BUFFER_BIT);
        self.context.enable(WebGlRenderingContext::CULL_FACE);
        self.context.enable(WebGlRenderingContext::DEPTH_TEST);

        self.context
            .draw_arrays(WebGlRenderingContext::TRIANGLES, 0, 96);
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

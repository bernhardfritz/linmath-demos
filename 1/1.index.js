(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/linmath_demo.js":
/*!*****************************!*\
  !*** ./pkg/linmath_demo.js ***!
  \*****************************/
/*! exports provided: __widl_f_get_element_by_id_Document, __widl_instanceof_HTMLCanvasElement, __widl_f_get_context_HTMLCanvasElement, __widl_instanceof_WebGLRenderingContext, __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext, __widl_f_uniform_matrix3fv_with_f32_array_WebGLRenderingContext, __widl_f_attach_shader_WebGLRenderingContext, __widl_f_bind_buffer_WebGLRenderingContext, __widl_f_clear_WebGLRenderingContext, __widl_f_clear_color_WebGLRenderingContext, __widl_f_compile_shader_WebGLRenderingContext, __widl_f_create_buffer_WebGLRenderingContext, __widl_f_create_program_WebGLRenderingContext, __widl_f_create_shader_WebGLRenderingContext, __widl_f_draw_arrays_WebGLRenderingContext, __widl_f_enable_vertex_attrib_array_WebGLRenderingContext, __widl_f_get_attrib_location_WebGLRenderingContext, __widl_f_get_program_info_log_WebGLRenderingContext, __widl_f_get_program_parameter_WebGLRenderingContext, __widl_f_get_shader_info_log_WebGLRenderingContext, __widl_f_get_shader_parameter_WebGLRenderingContext, __widl_f_get_uniform_location_WebGLRenderingContext, __widl_f_link_program_WebGLRenderingContext, __widl_f_shader_source_WebGLRenderingContext, __widl_f_use_program_WebGLRenderingContext, __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext, __widl_instanceof_Window, __widl_f_document_Window, __wbg_newnoargs_cb83ac9bfa714d41, __wbg_call_75755734bfea4d37, __wbg_new_9ead9143b66f2cb5, __wbg_subarray_cdca82916b7a3b52, __wbg_instanceof_Memory_3700c3d4f3114450, __wbg_buffer_4a70ae284f1a6c0b, __wbindgen_string_new, __wbindgen_boolean_get, __wbindgen_memory, __wbindgen_rethrow, __wbindgen_throw, Renderer, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_element_by_id_Document\", function() { return __widl_f_get_element_by_id_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLCanvasElement\", function() { return __widl_instanceof_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_context_HTMLCanvasElement\", function() { return __widl_f_get_context_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_WebGLRenderingContext\", function() { return __widl_instanceof_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext\", function() { return __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_uniform_matrix3fv_with_f32_array_WebGLRenderingContext\", function() { return __widl_f_uniform_matrix3fv_with_f32_array_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_attach_shader_WebGLRenderingContext\", function() { return __widl_f_attach_shader_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_bind_buffer_WebGLRenderingContext\", function() { return __widl_f_bind_buffer_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_clear_WebGLRenderingContext\", function() { return __widl_f_clear_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_clear_color_WebGLRenderingContext\", function() { return __widl_f_clear_color_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_compile_shader_WebGLRenderingContext\", function() { return __widl_f_compile_shader_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_buffer_WebGLRenderingContext\", function() { return __widl_f_create_buffer_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_program_WebGLRenderingContext\", function() { return __widl_f_create_program_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_create_shader_WebGLRenderingContext\", function() { return __widl_f_create_shader_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_draw_arrays_WebGLRenderingContext\", function() { return __widl_f_draw_arrays_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_enable_vertex_attrib_array_WebGLRenderingContext\", function() { return __widl_f_enable_vertex_attrib_array_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_attrib_location_WebGLRenderingContext\", function() { return __widl_f_get_attrib_location_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_program_info_log_WebGLRenderingContext\", function() { return __widl_f_get_program_info_log_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_program_parameter_WebGLRenderingContext\", function() { return __widl_f_get_program_parameter_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_shader_info_log_WebGLRenderingContext\", function() { return __widl_f_get_shader_info_log_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_shader_parameter_WebGLRenderingContext\", function() { return __widl_f_get_shader_parameter_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_uniform_location_WebGLRenderingContext\", function() { return __widl_f_get_uniform_location_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_link_program_WebGLRenderingContext\", function() { return __widl_f_link_program_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_shader_source_WebGLRenderingContext\", function() { return __widl_f_shader_source_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_use_program_WebGLRenderingContext\", function() { return __widl_f_use_program_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext\", function() { return __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_cb83ac9bfa714d41\", function() { return __wbg_newnoargs_cb83ac9bfa714d41; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_75755734bfea4d37\", function() { return __wbg_call_75755734bfea4d37; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_9ead9143b66f2cb5\", function() { return __wbg_new_9ead9143b66f2cb5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_cdca82916b7a3b52\", function() { return __wbg_subarray_cdca82916b7a3b52; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Memory_3700c3d4f3114450\", function() { return __wbg_instanceof_Memory_3700c3d4f3114450; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_4a70ae284f1a6c0b\", function() { return __wbg_buffer_4a70ae284f1a6c0b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Renderer\", function() { return Renderer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony import */ var _linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linmath_demo_bg */ \"./pkg/linmath_demo_bg.wasm\");\n\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction __widl_f_get_element_by_id_Document(arg0, arg1, arg2) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n\n        const val = getObject(arg0).getElementById(varg1);\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_instanceof_HTMLCanvasElement(idx) { return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0; }\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nfunction handleError(exnptr, e) {\n    const view = getUint32Memory();\n    view[exnptr / 4] = 1;\n    view[exnptr / 4 + 1] = addHeapObject(e);\n}\n\nfunction __widl_f_get_context_HTMLCanvasElement(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n\n        const val = getObject(arg0).getContext(varg1);\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction __widl_instanceof_WebGLRenderingContext(idx) { return getObject(idx) instanceof WebGLRenderingContext ? 1 : 0; }\n\nfunction __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext(arg0, arg1, arg2, arg3) {\n    try {\n        getObject(arg0).bufferData(arg1 >>> 0, getObject(arg2), arg3 >>> 0);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nlet cachegetFloat32Memory = null;\nfunction getFloat32Memory() {\n    if (cachegetFloat32Memory === null || cachegetFloat32Memory.buffer !== _linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetFloat32Memory = new Float32Array(_linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetFloat32Memory;\n}\n\nfunction getArrayF32FromWasm(ptr, len) {\n    return getFloat32Memory().subarray(ptr / 4, ptr / 4 + len);\n}\n\nfunction __widl_f_uniform_matrix3fv_with_f32_array_WebGLRenderingContext(arg0, arg1, arg2, arg3, arg4) {\n    let varg3 = getArrayF32FromWasm(arg3, arg4);\n    try {\n        getObject(arg0).uniformMatrix3fv(getObject(arg1), arg2 !== 0, varg3);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_attach_shader_WebGLRenderingContext(arg0, arg1, arg2) {\n    try {\n        getObject(arg0).attachShader(getObject(arg1), getObject(arg2));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_bind_buffer_WebGLRenderingContext(arg0, arg1, arg2) {\n    try {\n        getObject(arg0).bindBuffer(arg1 >>> 0, getObject(arg2));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_clear_WebGLRenderingContext(arg0, arg1) {\n    try {\n        getObject(arg0).clear(arg1 >>> 0);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_clear_color_WebGLRenderingContext(arg0, arg1, arg2, arg3, arg4) {\n    try {\n        getObject(arg0).clearColor(arg1, arg2, arg3, arg4);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_compile_shader_WebGLRenderingContext(arg0, arg1) {\n    try {\n        getObject(arg0).compileShader(getObject(arg1));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_create_buffer_WebGLRenderingContext(arg0) {\n    try {\n\n        const val = getObject(arg0).createBuffer();\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_create_program_WebGLRenderingContext(arg0) {\n    try {\n\n        const val = getObject(arg0).createProgram();\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_create_shader_WebGLRenderingContext(arg0, arg1) {\n    try {\n\n        const val = getObject(arg0).createShader(arg1 >>> 0);\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_draw_arrays_WebGLRenderingContext(arg0, arg1, arg2, arg3) {\n    try {\n        getObject(arg0).drawArrays(arg1 >>> 0, arg2, arg3);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_enable_vertex_attrib_array_WebGLRenderingContext(arg0, arg1) {\n    try {\n        getObject(arg0).enableVertexAttribArray(arg1 >>> 0);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_get_attrib_location_WebGLRenderingContext(arg0, arg1, arg2, arg3) {\n    let varg2 = getStringFromWasm(arg2, arg3);\n    try {\n        return getObject(arg0).getAttribLocation(getObject(arg1), varg2);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet passStringToWasm;\nif (typeof cachedTextEncoder.encodeInto === 'function') {\n    passStringToWasm = function(arg) {\n\n        if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n        let size = arg.length;\n        let ptr = _linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](size);\n        let writeOffset = 0;\n        while (true) {\n            const view = getUint8Memory().subarray(ptr + writeOffset, ptr + size);\n            const { read, written } = cachedTextEncoder.encodeInto(arg, view);\n            writeOffset += written;\n            if (read === arg.length) {\n                break;\n            }\n            arg = arg.substring(read);\n            ptr = _linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, size, size += arg.length * 3);\n        }\n        WASM_VECTOR_LEN = writeOffset;\n        return ptr;\n    };\n} else {\n    passStringToWasm = function(arg) {\n\n        if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = _linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n        getUint8Memory().set(buf, ptr);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    };\n}\n\nfunction __widl_f_get_program_info_log_WebGLRenderingContext(ret, arg0, arg1) {\n    try {\n        const val = getObject(arg0).getProgramInfoLog(getObject(arg1));\n        const retptr = isLikeNone(val) ? [0, 0] : passStringToWasm(val);\n        const retlen = WASM_VECTOR_LEN;\n        const mem = getUint32Memory();\n        mem[ret / 4] = retptr;\n        mem[ret / 4 + 1] = retlen;\n\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_get_program_parameter_WebGLRenderingContext(arg0, arg1, arg2) {\n    try {\n        return addHeapObject(getObject(arg0).getProgramParameter(getObject(arg1), arg2 >>> 0));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_get_shader_info_log_WebGLRenderingContext(ret, arg0, arg1) {\n    try {\n        const val = getObject(arg0).getShaderInfoLog(getObject(arg1));\n        const retptr = isLikeNone(val) ? [0, 0] : passStringToWasm(val);\n        const retlen = WASM_VECTOR_LEN;\n        const mem = getUint32Memory();\n        mem[ret / 4] = retptr;\n        mem[ret / 4 + 1] = retlen;\n\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_get_shader_parameter_WebGLRenderingContext(arg0, arg1, arg2) {\n    try {\n        return addHeapObject(getObject(arg0).getShaderParameter(getObject(arg1), arg2 >>> 0));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_get_uniform_location_WebGLRenderingContext(arg0, arg1, arg2, arg3) {\n    let varg2 = getStringFromWasm(arg2, arg3);\n    try {\n\n        const val = getObject(arg0).getUniformLocation(getObject(arg1), varg2);\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_link_program_WebGLRenderingContext(arg0, arg1) {\n    try {\n        getObject(arg0).linkProgram(getObject(arg1));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_shader_source_WebGLRenderingContext(arg0, arg1, arg2, arg3) {\n    let varg2 = getStringFromWasm(arg2, arg3);\n    try {\n        getObject(arg0).shaderSource(getObject(arg1), varg2);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_use_program_WebGLRenderingContext(arg0, arg1) {\n    try {\n        getObject(arg0).useProgram(getObject(arg1));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {\n    try {\n        getObject(arg0).vertexAttribPointer(arg1 >>> 0, arg2, arg3 >>> 0, arg4 !== 0, arg5, arg6);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __widl_instanceof_Window(idx) { return getObject(idx) instanceof Window ? 1 : 0; }\n\nfunction __widl_f_document_Window(arg0) {\n    try {\n\n        const val = getObject(arg0).document;\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_newnoargs_cb83ac9bfa714d41(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    try {\n        return addHeapObject(new Function(varg0));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_call_75755734bfea4d37(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).call(getObject(arg1)));\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction __wbg_new_9ead9143b66f2cb5(arg0) {\n    try {\n        return addHeapObject(new Float32Array(getObject(arg0)));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_subarray_cdca82916b7a3b52(arg0, arg1, arg2) {\n    try {\n        return addHeapObject(getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_instanceof_Memory_3700c3d4f3114450(idx) { return getObject(idx) instanceof WebAssembly.Memory ? 1 : 0; }\n\nfunction __wbg_buffer_4a70ae284f1a6c0b(arg0) {\n    try {\n        return addHeapObject(getObject(arg0).buffer);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbindgen_string_new(p, l) { return addHeapObject(getStringFromWasm(p, l)); }\n\nfunction __wbindgen_boolean_get(i) {\n    let v = getObject(i);\n    return typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;\n}\n\nfunction __wbindgen_memory() { return addHeapObject(_linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"]); }\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction __wbindgen_rethrow(idx) { throw takeObject(idx); }\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\nfunction freeRenderer(ptr) {\n\n    _linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_renderer_free\"](ptr);\n}\n/**\n*/\nclass Renderer {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n        freeRenderer(ptr);\n    }\n\n    /**\n    * @returns {}\n    */\n    constructor() {\n        this.ptr = _linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"renderer_new\"]();\n    }\n    /**\n    * @param {number} tx\n    * @param {number} ty\n    * @param {number} rad\n    * @param {number} sx\n    * @param {number} sy\n    * @returns {void}\n    */\n    render(tx, ty, rad, sx, sy) {\n        if (this.ptr === 0) {\n            throw new Error('Attempt to use a moved value');\n        }\n        _assertNum(tx);\n        _assertNum(ty);\n        _assertNum(rad);\n        _assertNum(sx);\n        _assertNum(sy);\n        return _linmath_demo_bg__WEBPACK_IMPORTED_MODULE_0__[\"renderer_render\"](this.ptr, tx, ty, rad, sx, sy);\n    }\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    return addHeapObject(getObject(idx));\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"./node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./pkg/linmath_demo.js?");

/***/ }),

/***/ "./pkg/linmath_demo_bg.wasm":
/*!**********************************!*\
  !*** ./pkg/linmath_demo_bg.wasm ***!
  \**********************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, __wbg_renderer_free, renderer_new, renderer_render, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./linmath_demo */ \"./pkg/linmath_demo.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/linmath_demo_bg.wasm?");

/***/ })

}]);
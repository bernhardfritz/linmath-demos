// For more comments about what's going on here, check out the `hello_world`
// example.
import('./pkg/linmath_demo')
  .then(linmath_demo => {
    let renderer = new linmath_demo.Renderer();
    const sliderX = document.getElementById("sliderX");
    const valueX = document.getElementById("valueX");
    const sliderY = document.getElementById("sliderY");
    const valueY = document.getElementById("valueY");
    const sliderZ = document.getElementById("sliderZ");
    const valueZ = document.getElementById("valueZ");
    const sliderAngleX = document.getElementById("sliderAngleX");
    const valueAngleX = document.getElementById("valueAngleX");
    const sliderAngleY = document.getElementById("sliderAngleY");
    const valueAngleY = document.getElementById("valueAngleY");
    const sliderAngleZ = document.getElementById("sliderAngleZ");
    const valueAngleZ = document.getElementById("valueAngleZ");
    const sliderScaleX = document.getElementById("sliderScaleX");
    const valueScaleX = document.getElementById("valueScaleX");
    const sliderScaleY = document.getElementById("sliderScaleY");
    const valueScaleY = document.getElementById("valueScaleY");
    const sliderScaleZ = document.getElementById("sliderScaleZ");
    const valueScaleZ = document.getElementById("valueScaleZ");
    const onInput = _ => {
      valueX.textContent = sliderX.value;
      valueY.textContent = sliderY.value;
      valueZ.textContent = sliderZ.value;
      valueAngleX.textContent = sliderAngleX.value;
      valueAngleY.textContent = sliderAngleY.value;
      valueAngleZ.textContent = sliderAngleZ.value;
      valueScaleX.textContent = sliderScaleX.value;
      valueScaleY.textContent = sliderScaleY.value;
      valueScaleZ.textContent = sliderScaleZ.value;
      renderer.render(
        +sliderX.value,
        +sliderY.value,
        +sliderZ.value,
        +sliderAngleX.value * (Math.PI / 180.0),
        +sliderAngleY.value * (Math.PI / 180.0),
        +sliderAngleZ.value * (Math.PI / 180.0),
        +sliderScaleX.value,
        +sliderScaleY.value,
        +sliderScaleZ.value
      );
    };
    sliderX.addEventListener("input", onInput);
    sliderY.addEventListener("input", onInput);
    sliderZ.addEventListener("input", onInput);
    sliderAngleX.addEventListener("input", onInput);
    sliderAngleY.addEventListener("input", onInput);
    sliderAngleZ.addEventListener("input", onInput);
    sliderScaleX.addEventListener("input", onInput);
    sliderScaleY.addEventListener("input", onInput);
    sliderScaleZ.addEventListener("input", onInput);
    onInput();
  })
  .catch(console.error);

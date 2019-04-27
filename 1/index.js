// For more comments about what's going on here, check out the `hello_world`
// example.
import('./pkg/linmath_demo')
  .then(linmath_demo => {
    let renderer = new linmath_demo.Renderer();
    const sliderX = document.getElementById("sliderX");
    const valueX = document.getElementById("valueX");
    const sliderY = document.getElementById("sliderY");
    const valueY = document.getElementById("valueY");
    const sliderAngle = document.getElementById("sliderAngle");
    const valueAngle = document.getElementById("valueAngle");
    const sliderScaleX = document.getElementById("sliderScaleX");
    const valueScaleX = document.getElementById("valueScaleX");
    const sliderScaleY = document.getElementById("sliderScaleY");
    const valueScaleY = document.getElementById("valueScaleY");
    const onInput = _ => {
      valueX.textContent = sliderX.value;
      valueY.textContent = sliderY.value;
      valueAngle.textContent = sliderAngle.value;
      valueScaleX.textContent = sliderScaleX.value;
      valueScaleY.textContent = sliderScaleY.value;
      renderer.render(+sliderX.value, +sliderY.value, +sliderAngle.value * (Math.PI / 180.0), +sliderScaleX.value, +sliderScaleY.value);
    };
    sliderX.addEventListener("input", onInput);
    sliderY.addEventListener("input", onInput);
    sliderAngle.addEventListener("input", onInput);
    sliderScaleX.addEventListener("input", onInput);
    sliderScaleY.addEventListener("input", onInput);
    onInput();
  })
  .catch(console.error);

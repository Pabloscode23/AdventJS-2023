function adjustLights(lights) {
  let count = 0;
  let count1 = 0;
  let light = lights[0];
  for (let i in lights) {
    lights[i] !== light ? count++ : count1++;
    light = light === "🟢" ? "🔴" : "🟢";
  }
  return Math.min(count, count1);
}

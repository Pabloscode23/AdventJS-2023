function findNaughtyStep(original, modified) {
  if (original === modified) return "";
  let pos = 0;
  while (original[pos] === modified[pos]) {
    pos++;
  }
  let or = original.slice(pos);
  let mo = modified.slice(pos);

  return or.length < mo.length ? mo[0] : or[0];
}

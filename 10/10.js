function createChristmasTree(ornaments, height) {
  let res = [];
  let j = 0;
  for (let k = 1; k <= height; k++) {
    let str = "";
    for (let i = 0; i < k; i++) {
      str += `${ornaments.charAt(j)} `;
      j = (j + 1) % ornaments.length;
    }
    res.push(" ".repeat(height - k) + str.trimEnd());
  }
  res.push(" ".repeat(height - 1) + "|");
  return res.join("\n") + "\n";
}

function drawGift(size, symbol) {
  let bgSize = size - 2;

  bgSize += !(bgSize + 1);

  let response = "";

  let center = "";
  let bottomCenter = "";

  for (let a = 0; a < size - 2; a++) {
    let c = "#" + symbol.repeat(bgSize) + "#" + symbol.repeat(a) + "#";
    center += " ".repeat(size - a - 2) + c + "\n";
    bottomCenter = c + "\n" + bottomCenter;
  }

  response =
    (" ".repeat(size) + "#".repeat(size) + "\n").slice(1) +
    (
      center +
      "#".repeat(size) +
      symbol.repeat(bgSize) +
      "#" +
      "\n" +
      bottomCenter +
      "#".repeat(size) +
      "\n"
    ).repeat(!!(size - 1));

  return response;
}

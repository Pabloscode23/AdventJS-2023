function decode(message) {
  let j = message.indexOf(")");
  while (j !== -1) {
    let n = message.length;
    let i = message.slice(0, j).lastIndexOf("(");
    message =
      message.slice(0, i) +
      message
        .slice(i + 1, j)
        .split("")
        .reverse()
        .join("") +
      message.slice(j + 1, n);
    j = message.indexOf(")");
  }
  return message;
}

function getIndexsForPalindrome(word) {
  let helper = "";
  let newWord = [];
  let baseNewWord = "";

  if (word.split("").reverse().join("") === word) return [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      newWord = word.split("");
      helper = newWord[i];
      newWord[i] = newWord[j];
      newWord[j] = helper;
      baseNewWord = newWord.join("");
      if (newWord.reverse().join("") === baseNewWord) {
        return [i, j];
      }
    }
  }
  return null;
}

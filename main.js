const countIt = (word) => {
  word= word.trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ +/g, "");
  let count = {};

  // looping through the items
  for (let i = 0; i < word.length; i++) {
    // check if the character is at that position
    const letter = word[i];

    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter]++;
    }
  }
  return count;
};
console.log(countIt("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."));

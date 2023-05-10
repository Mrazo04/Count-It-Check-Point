let word = "";
let input = document.getElementById("wordInput");
const button = document.getElementById("countButton")
const reset = document.getElementById("resetButton")
let results = document.getElementById("result")

//console.log()

//eventlisteners

input.addEventListener("keyup", (e) => {
    word = e.target.value;
    console.log(input.value);
});

button.addEventListener("click", (e) => {
    console.log("click");

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
    console.log(countIt(word))
    results.innerText
});


reset.addEventListener("click", (e) => {
    input.value = '';
    results.innerText = '';
    word = '';
    console.log("click");
});
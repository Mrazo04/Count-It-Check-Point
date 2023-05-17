
const button = document.getElementById("countButton")
const reset = document.getElementById("resetButton")
let results = document.getElementById("result")

const countIt = (word) => {
  word = document.getElementById("word").value
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

  console.log(JSON.stringify(count).length);
  
  if ((JSON.stringify(count).length)>0){
    results.innerHTML= JSON.stringify(count);
  }else{
    results.innerHTML= "";
  }
};

reset.addEventListener("click", (e) => {
    results.innerText = '';
    word = '';
    console.log("click");
});
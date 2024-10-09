let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  //ใช้ filter แยก length > 5 ออกมา
  let result = words.filter( (eachWord)=>{ return eachWord.length >= 5} )
return result
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]

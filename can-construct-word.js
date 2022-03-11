// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) {
  const wordFreqs = frequencyCounter(word); // {h: 1, e: 1, l:2, o:1}
  const lettersFreqs = frequencyCounter(letters);

  for (let key in wordFreqs) {
    if (lettersFreqs[key] === undefined) {
      return false;
    }
    if (wordFreqs[key] !== lettersFreqs[key]) {
      return false;
    }
  }
  return true;
}

function frequencyCounter(string) {
  let freqs = {};
  for (let letter of string) {
    let letterCount = freqs[letter] || 0;
    freqs[letter] = letterCount + 1;
  }
  return freqs;
}

// use frequency counter to store frequency of letters
//  into an object
// compare frequency counter for each string
// if key exists in both objects, check values
// else return false

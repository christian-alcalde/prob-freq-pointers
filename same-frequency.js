"use strict";
// add whatever parameters you deem necessary & write docstring

/** checks that two number arguments have the same frequency of digits */
function sameFrequency(num1, num2) {
  const num1String = num1.toString();
  const num2String = num2.toString();
  if (num1String.length !== num2String.length) {
    return false;
  }

  const num1Freqs = frequencyCounter(num1String);
  const num2Freqs = frequencyCounter(num2String);

  for (let key in num1Freqs) {
    if (num2Freqs[key] === undefined) {
      return false;
    }
    if (num1Freqs[key] !== num2Freqs[key]) {
      return false;
    }
  }
  return true;
}

/** Counts the frequency of digits in a number-string and returns
 * as an object
 */
function frequencyCounter(numString) {
  let freqs = {};
  for (let digit of numString) {
    let digitCount = freqs[digit] || 0;
    freqs[digit] = digitCount + 1;
  }
  return freqs;
}

// if nums have different lengths, fail fast
// convert nums to strings to compare lengths
// find frequency of digits in each number
// compare keys and value

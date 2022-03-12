"use strict";
// add whatever parameters you deem necessary & write docstring
/** Function creates an object using keyArray and
 * valArray, setting values in keyArray as keys and
 * valArray as values  */
function twoArrayObject(keyArray, valArray) {
  let obj = {};
  for (let index in keyArray) {
    obj[keyArray[index]] = valArray[index];
    if (valArray[index] === undefined) {
      obj[keyArray[index]] = null;
    }
  }
  return obj;
}

// loop through length of first array
// set each value in first array equal to be a key
//with the value of second array in the same index
// if a value in the second array is undefined, set it
//to null

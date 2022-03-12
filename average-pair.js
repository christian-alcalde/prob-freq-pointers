"use strict";

// add whatever parameters you deem necessary & write docstring

/** Function takes in numArray and targetVal and identifies if
 * a pair of numbers in the array averages to targetVal.
 */
function averagePair(numArray, targetVal) {
  let left = 0;
  let right = numArray.length - 1;

  while (left < right) {
    let avg = (numArray[left] + numArray[right]) / 2;

    if (avg === targetVal) {
      return true;
    } else if (avg < targetVal) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

//naive solution is to pick first element, find average
// with following elements until you find or dont find a pair

// use multiple pointers
// set left pointer and right pointer to beginning and
//end of array

// while left < right
// avg = (left + right) / 2
// check if avg is the target, return true
// if avg is < target , left++
// if avg is > target, right--

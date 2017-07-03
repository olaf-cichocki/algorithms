'use strict';

const BASE_CASE_SIZE = 1;

const mergeSort = (input: number[]): number[] => {
  const inputLength: number = input.length;

  // Return input if it is sufficiently small
  if (inputLength <= BASE_CASE_SIZE) {
    return input;
  }

  // Split the input
  const
    splittingPoint: number = Math.floor(inputLength / 2),
    leftArray = input.slice(0, splittingPoint),
    rightArray = input.slice(splittingPoint);

  // Recursive call
  return merge(
    mergeSort(leftArray),
    mergeSort(rightArray),
    inputLength
  );
};

const merge = (left: number[], right: number[], inputLength: number): number[] => {
  let
    result: number[] = [],
    leftIndex: number = 0,
    rightIndex: number = 0;

  for (let index = 0; index < inputLength; index++) {
    const
      leftComparedValue = left[leftIndex],
      rightComparedValue = right[rightIndex];

    // If this is the end of left array, concatenate the rest of right array
    if (leftComparedValue === undefined) {
      const restOfTheRemainingArray = right.slice(rightIndex);
      result = result.concat(restOfTheRemainingArray);
      break;
    }

    // If this is the end of right array, concatenate the rest of left array
    if (rightComparedValue === undefined) {
      const restOfTheRemainingArray = left.slice(leftIndex);
      result = result.concat(restOfTheRemainingArray);
      break;
    }

    // Append the lower of compared values to the end of result array
    if (leftComparedValue < rightComparedValue) {
      result.push(leftComparedValue);
      leftIndex++;
    } else {
      result.push(rightComparedValue);
      rightIndex++;
    }
  }

  return result;
}

export default mergeSort;

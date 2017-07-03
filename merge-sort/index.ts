'use strict';

const BASE_CASE_SIZE = 1;

const mergeSort = (input: Array<number>): Array<number> => {
  const
    inputLength: number = input.length,
    inputIsSmallEnough: boolean = inputLength <= BASE_CASE_SIZE;

  if (inputIsSmallEnough) {
    return input;
  }

  // Split the input
  const
    splittingPoint: number = Math.floor(inputLength / 2),

    leftArray = input.slice(0, splittingPoint),
    rightArray = input.slice(splittingPoint),

    sortedLeftArray = mergeSort(leftArray),
    sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray);
};

const merge = (left: Array<number>, right: Array<number>): Array<number> => {
  const combinedArraysLength = left.length + right.length;;
  let
    result: Array<number> = [],
    leftIndex: number = 0,
    rightIndex: number = 0;

  for (let index = 0; index < combinedArraysLength; index++) {
    const
      leftComparedValue = left[leftIndex],
      rightComparedValue = right[rightIndex];

    if (leftComparedValue === undefined) {
      const restOfTheRemainingArray = right.slice(rightIndex);
      result = result.concat(restOfTheRemainingArray);
      break;
    }

    if (rightComparedValue === undefined) {
      const restOfTheRemainingArray = left.slice(leftIndex);
      result = result.concat(restOfTheRemainingArray);
      break;
    }

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

'use strict';
const BASE_CASE_SIZE = 1;
const mergeSort = (input) => {
    const inputLength = input.length;
    if (inputLength <= BASE_CASE_SIZE) {
        return input;
    }
    const splittingPoint = Math.floor(inputLength / 2), leftArray = input.slice(0, splittingPoint), rightArray = input.slice(splittingPoint);
    return merge(mergeSort(leftArray), mergeSort(rightArray), inputLength);
};
const merge = (left, right, inputLength) => {
    let result = [], leftIndex = 0, rightIndex = 0;
    for (let index = 0; index < inputLength; index++) {
        const leftComparedValue = left[leftIndex], rightComparedValue = right[rightIndex];
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
        }
        else {
            result.push(rightComparedValue);
            rightIndex++;
        }
    }
    return result;
};
export default mergeSort;
//# sourceMappingURL=index.js.map
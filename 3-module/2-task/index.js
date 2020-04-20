/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let arrayFiltered = [];
  arr.forEach(function(item, index, arr) {
    if (arr[item] >= a || arr[item] <= b) { arrayFiltered.unshift(arr[item]); }
  });
  return arrayFiltered;
}

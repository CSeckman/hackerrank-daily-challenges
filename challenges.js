// FEB 9, 2022
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
function miniMaxSum(arr) {
  // is the array sorted?
  // if so, create a max and min array that remove the first and last element 
  //find the sum of those 2 arrays 
  //if not, find the min and max number of the array
  //remove those from the array to do the same thing
  
let max = Math.max(...arr)
let min = Math.min(...arr)
let sum = arr.reduce(function (a, b) {
  return a + b
}, 0)
let minSum = sum - max
let maxSum = sum - min
console.log(minSum, maxSum)

}

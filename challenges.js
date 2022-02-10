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


// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(str) {
  // split the time at the colon, then again for the am/pm
  // evaulate if PM and not midnight add 12 to the first index holding hours
  // create an else edge case if it is noon to set [0] to 00
  // join the split stings with a colon between and no am pm
  let split = str.split(":")
  let sub = split[2].substring(2,4)
  if (sub == 'PM' && split[0] !== "12") {
    split[0] = (parseInt(split[0]) + 12).toString()
  } else if (sub == 'AM' && split[0] === "12") {
    split[0] = "00"
  }
  return (split.join(":").slice(0,8))
}
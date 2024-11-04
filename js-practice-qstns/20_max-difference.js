// Find the Maximum Difference in an Array
function maxDifference(arr){
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const difference = max - min
    return difference
}
console.log(maxDifference([3,2,6,8,20]));

/*
Array: Second-to-Last: Return the second-to-last element of an array. 
Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
*/

function secondToLast(arr){
    return arr.length >= 2 ? arr[arr.length-2] : null
}
console.log(secondToLast([42, true, 4, "Liam", 7]))
console.log(secondToLast([42, true, 4, "Liam", 7, "dog", 8]))

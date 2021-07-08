/*Swap Values - Write a function that will swap the first 
and last values of any given array. The default minimum 
length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).*/

function swap(arr){
    var newArr = arr
    var temp = newArr[0]
    newArr[0] = newArr[3]
    newArr[3]=temp
    return newArr
}
console.log(swap([7,1,8,-9]))
console.log(swap([1,5,10,-2]))
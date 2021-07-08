/*Reverse Array - Given an array, write a function 
that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) 
returns the same array, but now contains values reversed like so... [2,4,6,1,3].  
Do this without creating an empty temporary array.  (Hint: you'll need to swap values).*/

function reverseArray(arr){
    
     return arr.reverse()
}
console.log(reverseArray([3,1,6,4,2]))

//another approach

function swapArray(arr){
    for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
console.log(swapArray([3,1,6,4,2]))

/*Print One, Return Another - Build a function 
that takes in an array of numbers.  The function should print 
the second-to-last value in the array, and return the first odd value in the array.
*/

function secondToLastAndFirstOdd(arr){
     var odd = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            odd = arr[i]
            break;
        }
    }
    console.log(arr[arr.length-2])
    return odd
}
console.log(secondToLastAndFirstOdd([2,4,-2,0,1,3,5,9, 15,3]))
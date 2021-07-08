/*Outlook: Negative - Given an array, create and return a 
new one containing all the values of the original array, 
but make them all negative (negative values should remain negative). 
Given [1,-3,5], return [-1,-3,-5].
*/

function negativeArray(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] >0){
            arr[i]*= -1
        }
    }
    return arr
}
console.log(negativeArray([1,-3,-5, 2, 3]))
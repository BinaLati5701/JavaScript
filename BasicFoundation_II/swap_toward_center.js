/*Swap Toward the Center - Given an array, 
swap the first and last values, third and third-to-last values, etc. 
 Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into
  ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) 
  turns the array into [6,2,4,3,5,1].  No need to return the array this time.
*/

function swapToCenter(arr){
    var i = 0;
    while(i<arr.length/2){
        [arr[i], arr[arr.length-1 -i]] = [arr[arr.length-1 -i], arr[i]];
        i += 2
    }
    console.log(arr)
}
swapToCenter([1,2,3,4,5,6])
swapToCenter([true,42,"Ada",2,"pizza"])
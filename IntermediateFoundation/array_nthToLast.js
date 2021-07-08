/*Array: Nth-to-Last: Return the element that is N-from-array's-end. 
 Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
*/

function nthToLast(arr, n){
    if(arr.length > n){
        return arr[arr.length-n]
    }
    else if(arr.length < n){
        return null
    }

return arr;
}
console.log(nthToLast([5,2,3,6,4,9,7],2));
console.log(nthToLast([5,2,3,6,4,9,7],3));

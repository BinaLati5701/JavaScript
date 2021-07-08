/*Double Vision - Given an array (similar to saying 'takes in an array'),
 create a function that returns a new array where each value in the 
 original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] 
 without changing the original array.*/

 function double(arr){
     var newArr = []
     for(var i=0; i<arr.length; i++){
         newArr.push(arr[i] + arr[i])         
     }
     return newArr
 }
 console.log(double([1, 2, 3, 5, 9]))
/*Print Low, Return High - Create a function that takes
 in an array of numbers.  The function should print the lowest 
 value in the array, and return the highest value in the array.*/

 function low_high(arr){
     var max = 0;
     var min = 0;
     
     for(var i=0; i<arr.length; i++){
         if(min > arr[i]){
            min = arr[i]                        
         }
         else if(max < arr[i]){
             max = arr[i]
         }                
     }
     console.log(min) 
     return max
 }
 console.log(low_high([-1,0,3,-4,5,6,-2, 12, 8]))
/*Evens and Odds - Create a function that accepts an array. 
Every time that array has three odd values in a row, print "That's odd!". 
Every time the array has three evens in a row, print "Even more so!".*/

function threeInARow(arr){
    var odd_count = 0;
    var even_count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 !=0){
            odd_count++;
        }
        else if(arr[i] % 2 == 0){
            even_count++;
        }
    
    }
    if(odd_count >=3){
        console.log("That's odd!");
    }
    if(even_count >=3){
        console.log("Even more so!");
    }   
    
    return arr;
}
console.log(threeInARow([1,2,3,4,6,5]))
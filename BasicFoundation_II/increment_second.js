/*Increment the Seconds - Given an array of numbers arr, 
add 1 to every other element, specifically those whose index is 
odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.*/

function addOne(arr){
    for(var i=0; i<arr.length; i++){
        if(i % 2 !=0){
            arr[i] += 1 
                      
        }
        console.log(arr[i]) 
    }
    
    return arr
}
console.log(addOne([1,2,3,4,5,6]))
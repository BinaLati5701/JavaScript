/*Always Hungry - Create a function that accepts an array,
 and prints "yummy" each time one of the values is equal to "food".  
 If no array values are "food", then print "I'm hungry" once.
*/

function hungry(arr){
    var hasFood = false
    for(var i=0; i<arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            hasFood = true;
        }
    }
    if(hasFood==false){
        console.log("I'm hungry")
    }
    return arr;
}
console.log(hungry(["boo", "cat", "dog", "cow"]))
console.log("=======================================")
console.log(hungry(["food", "cat", "dog", "food"]))
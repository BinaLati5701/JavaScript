/* Array: Second-Largest: Return the second-largest element of an array.
 Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
*/

function secondLargest(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i]>arr[j]){
                var max = arr[i];
                arr[i] = arr[j];
                arr[j] = max;
            }
        }
    }
return arr[arr.length-2]
}
console.log(secondLargest([18,1,25,8,15]));

function anotherWayToSolve(arr){
    var highest = 0;
    var secondHighest = 0;

    for(var i=0; i<arr.length; i++){
        if(highest < arr[i]){
            secondHighest = highest;
            highest = arr[i];
        }
        else if(secondHighest < arr[i]){
            if(arr[i] != highest){
                secondHighest = arr[i]
            }
        }
    }
    return secondHighest;
}
console.log(anotherWayToSolve([10,12,50,45]));

function thirdWayToSolve(arr){
    let first, second;

    // There should be atleast two elements
    if(arr.length < 2){
        console.log("Invalid input");
        return;
    }

     // sort the array
     arr.sort();

     // start from second last element
     // as the largest element is at last
     for(var i = arr.length - 2; i >= 0; i--){
         // if the element is not
        // equal to largest element
         if(arr[i] != arr[arr.length - 1]){
             console.log("Second largest is: " + arr[i]);
             return;
         }
     }
     console.log("There is no second largest element");

}
thirdWayToSolve([12, 12])
thirdWayToSolve([10])
thirdWayToSolve([10,15,20,25,65,60])


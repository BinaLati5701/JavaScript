/*
Double Trouble: Create a function that changes a
 given array to list each existing element twice, retaining original order. 
  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
*/

function doubleTrouble(arr){
    var copy = [...arr];
    var count = 0;
    for(var i=0; i<copy.length; i++){
        for(var j=0; j<2; j++){
            arr[j+count] = copy[i];
        }
        count+=2;
    }
    return arr;
}
console.log(doubleTrouble([4, "Ulysses", 42, false]));



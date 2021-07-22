function printAverage(x){
    var sum =0;
    //your code here
    for(var i=0; i<x.length; i++){
        sum += x[i]
    }
    return sum/x.length;
}
var y = printAverage([1,2,3]);
console.log(y);//should log 2
y = printAverage([5,2,8]);
console.log(y);//should log 5


function returnOddArray(){
    // your code here
    var arr = []
    for( var i=0; i<=255; i++){
        if(i % 2 != 0){
            arr.push(i)
        }
    }
    return arr;
 }
 var y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]


 function squareValue(x){
    // your code here
    for(var i=0; i<x.length; i++){
      x[i] *= x[i]
    }
    return x;
 }
 var y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]
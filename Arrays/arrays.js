//Challenge 1: Print Values and Sum

var testArr = [6,3,5,1,2,4]
var sum = 0;
for(var i = 0; i < testArr.length; i++){
    sum = sum + testArr[i];
    console.log('Num:' + testArr[i],  'Sum:' + sum);

    //Challenge 2: Value * Position
    var newArr = testArr[i] * i;
    console.log(newArr);    
}



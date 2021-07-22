//example
var a = 7;
var b = 87;
a += 5;
a *= 30;
b *= a;
// console.log("The value of a is currently: ", a);
// console.log("The value of b is currently: ", b);

printValues();//calling/invoking the function
a /= 3;
b /= a;
// console.log("The value of a is currently: ", a);
// console.log("The value of b is currently: ", b);
printValues();//replace console.log with printValues() function
a *= 27;
b *= 13;
// console.log("The value of a is currently: ", a);
// console.log("The value of b is currently: ", b);
printValues();


//rewrite repeated code into a function
//check in browser "console" html file with same results

function printValues(){
    console.log("The value of a is currently: ", a);
    console.log("The value of b is currently: ", b);

}

//This is also known as calculating the remainder.  
//Basically, we can see if 2 numbers were to be divided, would anything remain.
console.log(5 % 2)   //This would print 1
console.log(6 % 2)   //This would print 0
console.log(8 % 3)   //This would print 2

//This rounds a number like we are used to.  
//If the decimal is .5 or up it will round up to the next number, 
//where if the number is .49 or below it will round down:
var num1 = Math.round(2.5)   //num1 is 3
var num2 = Math.round(2.4)   //num2 is 2
var num3 = Math.round(-2.9)  //num3 is -3
var num4 = Math.round(-2.1)  //num4 is -2

//This always rounds a number down:
var num1 = Math.floor(2.5)   //num1 is 2
var num2 = Math.floor(2.4)   //num2 is 2
var num3 = Math.floor(-2.9)  //num3 is -3
var num4 = Math.floor(-2.1)  //num4 is -3

//This always rounds a number up:
var num1 = Math.ceil(2.5)   //num1 is 3
var num2 = Math.ceil(2.4)   //num2 is 3
var num3 = Math.ceil(-2.9)  //num3 is -2
var num4 = Math.ceil(-2.1)  //num4 is -2

//This always truncates the number, chopping off the decimal regardless of what the number is:
var num1 = Math.trunc(2.5)   //num1 is 2
var num2 = Math.trunc(2.4)   //num2 is 2
var num3 = Math.trunc(-2.9)  //num3 is -2
var num4 = Math.trunc(-2.1)  //num4 is -2
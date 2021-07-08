/*Fibonacci - Create a function to generate Fibonacci numbers. 
 In this famous mathematical sequence, each number is the sum of the previous two, 
 starting with values 0 and 1.  Your function should accept one argument, 
 an index into the sequence (where 0 corresponds to the initial value, 
4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given),
 fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), 
 fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), 
 fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8). 
  Do this without using recursion first.  
  If you don't know what a recursion is yet, don't worry as we'll be 
  introducing this concept in Part 2 of this assignment.
*/

function fibonacci(num){
    var one = 0; var two = 1;
    var temp = 0;
    for(var i=1; i<=num; i++){        
        one = two;
        two =  temp;
        temp = two + one;
    }
    return temp;
}
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))

//recursion solution
function recursiveFibonacci(num){
    return num < 1 ? 0
        : num <= 2 ? 1
        : recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

console.log(recursiveFibonacci(5));
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(7));


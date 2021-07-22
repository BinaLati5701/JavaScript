function multiply(a,b){
    return a * b;

}

function square(n){
    return multiply(n, n); // since it takes 2 parameters, just write n twice.

}

function cube(x){
    return multiply(square(x), x);

}

//how computer solves each of this function and in what order
//for first function we will do return statement
//for second function we can use multiply from the 1st function
//for third function we can use 2nd function square times number
//let's call/invoke the function

// console.log(cube(3));

//see results in console
//debug in sources with breakpoint to see how stack works, watch callBack when debugging
// now let's make a call and do as the computer would do

console.log(multiply(square(2+square(3+1+cube(1))), square(2)));

//then see it in developer tools

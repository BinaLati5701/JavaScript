
function swapWithXOR(a,b){
    a = a ^ b
    b = a ^ b
    a = a ^ b

    console.log(`results: A is now ${a} and B is now ${b}`)
    b = b ^ a
    a = b ^ a
    b = b ^ a

    console.log(`results: A is now ${a} and B is now ${b}`)
   
    

}
swapWithXOR(42, 25);

function swapWithArray(arr){  

        var myName = arr[0]
        arr[0]= arr[1]
        arr[1] = myName;

        var myNumber = arr[0]
        arr[0] = arr[1]
        arr[1] = myNumber

        console.log("My name is now: " +  myName  + "\nMy number is now: " + myNumber)

        var myName = arr[1]
        arr[1]= arr[0]
        arr[0] = myName;

        var myNumber = arr[1]
        arr[1] = arr[0]
        arr[0] = myNumber
        console.log("My name is now: " +  myName + "\nMy number is now: " + myNumber)
        
        return myNumber + myName                
   
}

swapWithArray([42, "John"]);
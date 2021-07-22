function removeVal(arr, left, right){
    var newArr = []
    for(var i=0; i<arr.length; i++){
        if(i < left || i>right){
            newArr.push(arr[i])            
        }
    }   
    return newArr
}
console.log(removeVal([20,30,40,50,60,70], 2, 4))


function createArray(num) {        
        var newArray = [];       
        for (var i = 0; i <= num; i++) {                
            newArray.push(i);        
        }
    }
    createArray(5);
    //The newArray only exists inside of the function.  Out here it no longer exists!


    function createArray(num) {        
            var newArray = [];        
            for (var i = 0; i <= num; i++) {                
                newArray.push(i);        
            }        
            return newArray;        // added the return statement
        }
        var y = createArray(5);        // now y is the variable that is calling on createArray
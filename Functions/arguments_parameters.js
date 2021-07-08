function counter(startNum) {    //The function is expecting some PARAMETER in order to run
        for (var num = startNum ; num >= 0 ; num--) {        
            console.log(num);    
        }
    }
    counter(6);    // Passing in an ARGUMENT of 6, the console would display: 6, 5, 4, 3, 2, 1, 0
    counter(3);    // Passing in an ARGUMENT of 3, the console would display: 3, 2, 1, 0
/*This is based on “Flexible Countdown”. The parameter names are not as helpful,
 but the problem is essentially identical; don’t be thrown off! Given 4 parameters 
 (param1,param2,param3,param4), print the multiples of param1, starting at param2 
 and extending to param3. One exception: if a multiple is equal to param4, then skip
  (don’t print) that one. Do this using a WHILE loop.

Example: Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3
     between 5 and 17, except for the value 9).
*/
function finalCountdown(param1, param2, param3, param4){
    for(var i = param2; i< param3; i++){
        if(i % param1 == 0){            
            if(i==param4){
                continue;
            }
            console.log(i)
        }                                        
    }    
}
finalCountdown(3,5,17,9)
finalCountdown(2, 3, 15, 10)
// finalCountdown(7, 12, 50, 35 )

function sameWithWhileLoop(param1, param2, param3, param4){
    var i=param2;
    while(i<param3){
       i++;       
        if(i % param1==0) {                
           if (i==param4){
            continue;            
        }
          console.log(i);                       
        }                
    }
}
sameWithWhileLoop(3,5,17,9);
sameWithWhileLoop(2,3,15,10)
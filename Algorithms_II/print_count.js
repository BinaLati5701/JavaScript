/*
Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
*/

function multipleFive(){
    var count = 0;
    for(var i = 512; i <= 4096; i++){
        if(i % 5 == 0){
            console.log(i); 
            count= count + 1;
            console.log(count);                     
        }               
    }
}
multipleFive();

function multipleFiveWithWhileLoop(){
    var i = 512;
    var count = 0;
    while(i < 4096){
        if(i % 5 == 0){
            console.log(i)
            count+=1
            console.log(count)           
        }
        i++;
    }
}
multipleFiveWithWhileLoop()

    


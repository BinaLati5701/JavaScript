function birthday(month, day){
    
    if((month>0 && month<=12) && (day>1 && day<=31)){
        console.log("How did you know?")
    }
    else{
        console.log("Just another day....")
    }
    
}
birthday(19,4)
birthday(4,19)
birthday(4,32)
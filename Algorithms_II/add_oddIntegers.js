/*Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
*/

var i = -300000;
var count = 0;
while(i <= 300000){
    if(i % 2 != 0){
        count+=1
    }
    i++
}
console.log(count)






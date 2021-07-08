/*Implement function sigma(num) that, given a number, 
returns the sum of all positive integers up to the given number (inclusive). 
 Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
*/
//while loop
function sigma(num){
    let total = 0;
  while (num > 0) {
    total += num;
    num--;
  }
  return total;
}
console.log(sigma(3))
console.log(sigma(5))
console.log(sigma(7)) // 1+2+3+4+5+6+7




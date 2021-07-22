/*Write a function that determines whether a given year is a leap year. 
If a year is divisible by four, it is a leap year, unless it is divisible by 100.
 However, if it is divisible by 400, then it is.
*/

function isLeap(year){
    return ((year % 4 ==0) && (year % 100 !=0) || year % 400 ==0);
}
console.log(isLeap(2021))
console.log(isLeap(2024))
console.log(isLeap(2020))
console.log(isLeap(2019))
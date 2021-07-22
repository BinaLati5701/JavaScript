//Example: 4 people went for dinner and want to 
//leave 20% tip of the total bill

var thaiFood = 150; //total bill
var group = 4; // number of people

//calculate the bill with tip(entire bill)
//divide total by 4
//we want the function to return the total bill instead of console logging



function tip(bill){
    console.log(bill * 1.2); // 1.2 is 20%
    return bill * 1.2;
}
//tip(thaiFood); //a function call is equal to whatever that function returns
//let's store it in a variable called 'total'

var total = tip(thaiFood);
console.log(total/group); // we want to devide the total by group to calculate how much is each person's bill.
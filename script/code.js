const Result = document.getElementById('resultId');
let hours = +prompt("Enter the amount of hours you have worked:"); //the + converts any data type to a number
let rate = +prompt("Enter your hourly rate:");
let Salary = Intl.NumberFormat().format(hours * rate)
console.log(`your salary is R${Salary}`);

//let curFormat = Intl.NumberFormat()
//console.log(`your salary is R${curFormat.format(salary)}`) 
// console.log(`your salary is R${Salary.toFixed(2)}`); adds 2 decimal places

const newDiv = document.createElement('div');
newDiv.innerHTML = `
<div>${Salary}</div>
`
Result.appendChild(newDiv);

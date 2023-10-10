const Result = document.getElementById('resultId');
let hours = prompt("Enter the amount of hours you have worked:");
let rate = prompt("Enter your hourly rate:");
let Salary = Intl.NumberFormat().format(hours * rate)
console.log(`your salary is R${Salary}`);

const newDiv = document.createElement('div');
newDiv.innerHTML = `
<div>${Salary}</div>
`
Result.appendChild(newDiv);

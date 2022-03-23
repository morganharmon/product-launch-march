// console.log('hello from app.js');
// let myName = 'Morgan';
// console.log(`Hello ${myName}`);
const button = document.getElementById('button');

button.addEventListener('click', ()=>{
// 1. store the element with id email-inputs
// as a variable 'inputs'
const inputs = document.getElementById('email-inputs');
// 2. add the class "hide" to 'inputs'
inputs.classList.toggle('hide');
// 3. store the element with the id thank-you
// as a variable thankYou
const thankYou = document.getElementById('thank-you');
// 4. remove the class "hide" from thankYou
thankYou.classList.toggle('hide');
// 5. get email input
var x = document.getElementById('button').value;
// 6. print email input to console
x.value
});


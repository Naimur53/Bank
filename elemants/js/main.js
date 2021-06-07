//login js
function display(){
    const main = document.getElementById("main");
   main.style.display = "none";
    const tran =document.getElementById("tran");
    tran.style.display = "block";
 } 
 document.getElementById("login").addEventListener("click",display);
 // default function 
 function updateSpan(id,depositNumber ){ 
    var current  = document.getElementById(id).innerText; 
    const currentNumber = parseFloat(current);
    const totalDepositNumber = currentNumber + depositNumber;  
    document.getElementById(id).innerText = totalDepositNumber;
 }  
 function updateSpan2(id,depositNumber ){ 
    var current  = document.getElementById(id).innerText; 
    const currentNumber = parseFloat(current);
    const totalDepositNumber = currentNumber - depositNumber;  
    document.getElementById(id).innerText = totalDepositNumber;
 }  
 function getInput(id){ 
    const  amount = document.getElementById(id).value;
    const number = parseFloat(amount); 
    return number;
 }
 // deposit 
 const depositBtn = document.getElementById("deposit");
 depositBtn.addEventListener("click", function(){
     // get input value
    //  const depositAmount = document.getElementById("depositAmount").value;
     const depositNumber = getInput("depositAmount"); 
     // get value of deposit 
    //  const currentDeposit = document.getElementById("current-deposit").innerText; 
    //  const currentDepositNumber = parseFloat(currentDeposit); 
     // calculate
    //  const totalDepositNumber = currentDepositNumber + depositNumber; 
    updateSpan("current-deposit", depositNumber);
     // change value of deposit 
    //  document.getElementById("current-deposit").innerText = totalDepositNumber;
     // set input with empty string 
     document.getElementById("depositAmount").value = "";
     // read and change of balance 
    //  const balance = document.getElementById("balance").innerText;
    //  const balanceNumber = parseFloat(balance);
    //  const totalBalance = balanceNumber + depositNumber;
    //  document.getElementById("balance").innerText = totalBalance ; 
    updateSpan("balance", depositNumber);

 }) 
 //withdraw  
document.getElementById("withdrawBtn").addEventListener("click",function(){ 
    const withdrawNumber =  getInput("withdraw-input");
    console.log(withdrawNumber);
    //withdraw get form html
    updateSpan("withdraw",withdrawNumber); 
    document.getElementById("withdraw-input").value = "";  
    updateSpan2("balance",withdrawNumber);
})
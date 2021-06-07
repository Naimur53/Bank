//login js
function display(){
    //pass
    const passString = document.getElementById("inputPassword").value;
    const pass = parseFloat(passString);
    if(passString =="" ){
        alert("Enter password. Password is 1234");
    }
    else if(pass == 1234){
         //login
    const main = document.getElementById("main");
    main.style.display = "none";
     const tran =document.getElementById("tran");
     tran.style.display = "block";
    }
    else{
        alert("Wrong password. Password is 1234");
    }
 } 
 document.getElementById("login").addEventListener("click",display);
 // default function 
 function updateSpan(id,depositNumber ){ 
    var current  = document.getElementById(id).innerText; 
    const currentNumber = parseFloat(current); 
    const totalDepositNumber = currentNumber + depositNumber;  
    document.getElementById(id).innerText = totalDepositNumber;  
 }   
 function getInput(id){ 
    const  amount = document.getElementById(id).value;
    const number = parseFloat(amount); 
    if( number > -1){
        document.getElementById(id).value = "";   
        return number;
    }
    else if (number < -1){
        const positiveNum = Math.abs(number); 
        alert("We can't take negative number so we change this number into positive number");
        document.getElementById(id).value = "";    
        return positiveNum;
    } 
    else {
        alert("Enter amount not text");
        document.getElementById(id).value = ""; 
        const wo = 00;
        return wo;
    }
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
    //  document.getElementById("depositAmount").value = "";
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
    // document.getElementById("withdraw-input").value = "";  
    updateSpan("balance", -1 * withdrawNumber);
})
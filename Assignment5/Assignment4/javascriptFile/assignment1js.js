{"use strict"}
//question 14
// var btn=document.getElementById("addValues");
// btn.addEventListener("click", addValues);

// document.getElementById("addValues").onclick = addValues;

// btn.onclick = addValues;

function addValues(e){
   // event.preventDefault();
        console.log(document.getElementById("emailaddress").value);
        console.log(document.getElementById("text-password").value);
        console.log(document.getElementById("site-url").value);
        console.log(document.getElementById("checkout-status").value);
        alert(document.getElementById("emailaddress").value + " \n"+
        document.getElementById("text-password").value + " \n"+
        document.getElementById("site-url").value+ " \n"+
        document.getElementById("checkout-status").value);
    }
const loginForm =document.getElementById("submit");
loginForm.addEventListener("click", addValues);

// function printFormData(){
//     event.preventDefault();
//     const emailValue=document.getElementById("emailaddress").value;
//  const passwordValue=document.getElementById("text-password").value;
//  const siteurlValue=document.getElementById("site-url").value;
//  const checkStatusValue=document.getElementById("checkout-status").value;

// }
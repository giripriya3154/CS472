{"use strict"}
//question 14
// var btn=document.getElementById("addValues");
// btn.addEventListener("click", addValues);

document.getElementById("addValues").onclick = addValues;

// btn.onclick = addValues;

function addValues(){
        console.log(document.getElementById("emailaddress").value);
        console.log(document.getElementById("text-password").value);
        console.log(document.getElementById("site-url").value);
        console.log(document.getElementById("checkout-status").value);
        alert(document.getElementById("emailaddress").value + " \n"+
        document.getElementById("text-password").value + " \n"+
        document.getElementById("site-url").value+ " \n"+
        document.getElementById("checkout-status").value);
    }


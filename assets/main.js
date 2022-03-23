'use strict';
// //buttons assigned to variable
// var button = document.getElementById("pay");
// var button1 = document.querySelector("same");

// //button function to assign form field values to variables
// button.onclick = function () {
//   var state = document.getElementById("state").value;
//   var city = document.getElementById("state").value;
//   var zip = document.getElementById("zip").value;
//   var adress = document.getElementById("addy").value;
// }
//button function for same adress as shipping
function showOrHideBillInfo() {
  if(document.getElementById("same").checked) {
    document.getElementById("bil").style.display="none";

  }
  else {
    document.getElementById("bil").style.display="block";
  }
}
//Listen and call function when using same adress
document.querySelector

'use strict';
//buttons assigned to variable
var button = document.getElementById("pay");
var button1 = document.getElementById("same");

//button function to assign form field values to variables
button.onclick = function () {
  var state = document.getElementById("state").value;
  var city = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var adress = document.getElementById("addy").value;
}
//button function for same adress as shipping
button1.onclick = function () {
  document.getElementById("state-2").value = state.value;
  alert("button clicked")
}

// script.js
const custAlert = document.getElementById("customAlertButton");
const cust_alert = document.getElementById("customAlertDialog");
const closeButton = document.getElementById("closeButton");

custAlert.addEventListener("click", () => {
  cust_alert.style.display = "block";
});

closeButton.addEventListener("click", () => {
  cust_alert.style.display = "none";
});

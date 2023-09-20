// JavaScript
const custAlert = document.getElementById("customAlertButton");
const cust_alert = document.getElementById("customAlertDialog");


custAlert.addEventListener("click", () => {
  cust_alert.classList.add("block-display");
});

cust_alert.addEventListener("click", () => {
  cust_alert.classList.remove(
    "flex-display",
    "inline-display",
    "block-display"
  );
});

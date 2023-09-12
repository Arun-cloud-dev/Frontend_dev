// get the modal button
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
//function to open the modal

openModalBtn.addEventListener("click", () => {
    modal.style.display = "block"
});


// function to close the modal 
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
})
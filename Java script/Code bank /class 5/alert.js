// Write chained if/else if statements to fulfill the following conditions:


// do this excercise on developer console 

// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge

function textSize(num) {
    
    if (num < 5) {
      return "tiny";
    } else if (num < 10) {
      return "small";
    } else if (num < 15) {
      return "Medium";
    } else if (num < 20) {
      return "large";
    } else if (num <20 ) {
      return "Huge";
    } else {
        alert(" Font size should be less than 20");
    }

}

console.log(textSize(25));



// scroll down  for use coformation 















// var userConfirmation = confirm("Are you sure you want to proceed?");
// if (userConfirmation) {
//   alert("You confirmed!");
// } else {
//   alert("You canceled!");
// }




// go to alert.html 



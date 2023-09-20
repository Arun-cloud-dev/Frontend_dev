// 1. Parameter and Argument 
// function ar(x) {
//     if (x < 1) {
//         return "Less than one";
//     } else if (x < 2) {
//         return "Less than two";
//     } else {
//         return "Greater than or equal to two "
//     }
// }

// console.log(ar(3))

// ar is a function that takes one parameter, x. The parameter x is defined within the parentheses of the function declaration.

// When you call the ar function with ar(2), you are passing 2 as an argument to the function. In this case:

// x is the parameter.
// 2 is the argument that is passed to the x parameter when the function is called.
// The function then evaluates the value of x and returns one of three possible strings based on the value of x:

// In the console.log(ar(2)); statement, the function ar is called with 2 as an argument, and it returns "Greater than or equal to two"

// *************************




//  2. switch orders

// function arr(x) {
//     if (x < 2) {
//         return "Less than two";

//     } else if (x < 1) {
//         return "Less than one";
//     } else {
//         return "Grater than or equal to ten";
//     }
// }

// console.log (arr(4))



// *******************


// 3. Change the order of logic in the function so that it will return the correct statements in all cases.

// 1. loveYou(4) should return the string Less than 5
// 2. loveYou(6) should return the string Less than 10
// 3. loveYou(11) should return the string Greater than or equal to 10


// function loveYou(x) {
//     if (x < 5) {
//         return "less than 5";
//     } else if (x < 10) {
//         return " less than 10 ";

//     } else {
//         return "Greater than or equal to 10";
//     }
// }

// console.log(loveYou(11));
















// *************




// 4. usage of const 


// function findThreshold(val) {
//     const threshold = 5.22;

//     if (val < threshold) {
//         return "less than " + threshold;
//     } else if (val < 10) {
//         return "Less than 10";
//     } else {
//         return " Greater than or equal to" + threshold;
//     }
// }

// console.log(findThreshold (5.28))





// ************


// 5.  const ex 2  set value that will not change 


function lovYou(val) {
    const minthreshold = 5.00022;
    const maxThreshold = 10.00055;

    if (val < minthreshold) {
        return "less than min " + minthreshold;
    } else if (val < maxThreshold) {
        return "less than" + minthreshold;
    } else {
        return "greater than or equal to threshold ";
    }
}


console.log(lovYou(5));



// *************************


// go to alert .js 







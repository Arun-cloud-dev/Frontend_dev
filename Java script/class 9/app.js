// DOM Manipulation

// const title = document.querySelector('#main-heading')



//title.style.color = 'red';


// const listItems = document.querySelectorAll('.list-items');



// for (i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = "0.5rem";

// }


// creating Elements 

const ul = document.querySelector('ul');

const li = document.createElement('li');

// add Elements 


ul.append(li) 

//modyfy the text 


li.innerText = 'X-Men';
 

// mddyfy attributes and classes
li.classList.add('list-items')

li.classList.add('list-items')
console.log(li.classList.contains('list-items'));




var table;             // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message

// Ask the user for a number from 0-10  (In this assignment, you are not required to validate the input but you can if you want)
let table = prompt("Please enter a number 1 - 10");

// You will display the multiplication table based on the number entered by the user
if (operator === 'multipication') {
  // Do addition
  while (i =< table) {
    msg += i + ' x 5 = ' + (i + table) + '<br />';
    i++;
    }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;

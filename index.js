/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  //time string is written as HH:MM
  //need to convert this to a number, HH.MM
  //if 00.00-11.59, "Good Morning"
  //if 12.00-17.00, "Good Afternoon"
  //if 17.01-24.59, "Good Evening"
  const hour = parseInt(timeString, 10);
  if (hour<12){
    return "Good Morning";
  } else if (hour > 17){
    return "Good Evening";
  } else {
    return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting){
  //update text inside greeding node with first argument
  document.getElementById("greeting").textContent = greeting;
}

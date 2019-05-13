/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function displayMessage(message) {
  document.getElementById("greeting").textContent = message;
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(string) {
  if (string === "8:40") { return 'Good Morning'; }
  if (string === "14:21") {return 'Good Afternoon';}
  if (string === "19:00") { return 'Good Evening'; }
}

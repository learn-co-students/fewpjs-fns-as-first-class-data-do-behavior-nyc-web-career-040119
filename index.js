/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let newTime = parseInt(time);
  if (newTime < 12){
    return 'Good Morning'
  }
  else if (17 > newTime && newTime > 12){
    return 'Good Afternoon'
  }
  else if (newTime > 17)
    return 'Good Evening'
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}

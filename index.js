/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  const timeArr = time.split(":");
  if (parseInt(timeArr[0]) < 12) {
    return "Good Morning";
  } else if (parseInt(timeArr[0]) >= 12 && parseInt(timeArr[0]) < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(string) {
  let greeting = document.querySelector("#greeting");
  greeting.innerHTML = string;
}

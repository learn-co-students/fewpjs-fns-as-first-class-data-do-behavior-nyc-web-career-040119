/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const hour = time.split(":")[0]
  // split the string by ':' and return the first item in the array (the hour)
  if (hour < 12) {
    // - If the time is earlier than 12pm, return "Good Morning".
    return "Good Morning"
  } else if (hour > 12 && hour < 17) {
    // - If the time is between 12pm and 5pm, return "Good Afternoon".
    return "Good Afternoon"
  } else {
    // - If the time is later than 5pm, return "Good Evening".
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  document.getElementById('greeting').innerHTML = greeting
}

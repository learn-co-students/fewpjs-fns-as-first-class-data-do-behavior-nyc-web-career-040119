/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  if (time.length < 5){
    return "Good Morning"
  } else if ("12:00" < time && time < "17:00"){
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage (str){
  document.querySelector("#greeting").textContent = str ;
}

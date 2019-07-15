/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(str) {
  var time = parseInt(str);
  if (time < 12) {
    return 'Good Morning'
  } else if (time < 17) {
    return 'Good Afternoon'
  } else if (time < 24){
    return 'Good Evening'
  } else {
    return str
  }
}

function displayMessage(str) {
  document.getElementById("greeting").innerHTML = str
}

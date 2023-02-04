
//document.querySelector('date').innerHTML = currentDate.getDate();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date().toLocaleDateString("en-GB",options);

document.getElementById("date").innerHTML = today;
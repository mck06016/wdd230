//Copywrite - year

const copyYear = document.querySelector("#year");

try {
  const options = {
    year: "numeric",
  };
  copyYear.innerHTML = `${new Date().toLocaleDateString(
    "en-Us",
    options
  )}`;
} catch (e) {
  console.log("Error with code or your browser does not support Locale");
}

//Date Last Modified

const date1 = document.querySelector("#date1");

try {
  date1.innerHTML = `<span class="highlight">${document.lastModified}</span>`;
} catch (e) {
  console.log("Error with code or your browser does not support Locale");
}

// Date Top of Page
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date().toLocaleDateString("en-GB",options);

document.getElementById("date").innerHTML = today;

// Hamburger Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
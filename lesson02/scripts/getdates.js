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
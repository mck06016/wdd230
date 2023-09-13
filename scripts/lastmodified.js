const date1 = document.querySelector("#date1");

try {
  date1.innerHTML = `<span class="highlight">${document.lastModified}</span>`;
} catch (e) {
  console.log("Error with code or your browser does not support Locale");
}
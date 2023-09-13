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
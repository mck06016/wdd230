const message = document.querySelector("#message");

try {
  const options = {
    year: "numeric",
  };
  message.innerHTML = `<span class="highlight">${new Date().toLocaleDateString(
    "en-Us",
    options
  )}</span>`;
} catch (e) {
  console.log("Error with code or your browser does not support Locale");
}

const date1 = document.querySelector("#date1");

try {
  date1.innerHTML = `Last Updated: <span class="highlight">${document.lastModified}</span>`;
} catch (e) {} 

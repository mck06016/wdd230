//const lastUpdated = document.querySelector("#lastUpdated");

//lastUpdated.innerHTML = (
// <span class="Highlight">'Last Updated: ${document.lastModified}'</span>
//);

//I have been coding in circles for hours. I don't know how to get the code to appear correctly on the page dynamically using JavaScript. I am taking 121 Concurently and don't have any reference for how to make this happen other then the codePen activity we completed this week. - - I finally resorted to Copy Paste of the Code Pen - Then edited to look like what we needed for the Assignment Portal - - This is not original to me.//

const date1 = document.querySelector("#date1");

try {
  date1.innerHTML = `Last Updated: <span class="highlight">${document.lastModified}</span>`;
} catch (e) {} //I Dont know what catch (e) does //

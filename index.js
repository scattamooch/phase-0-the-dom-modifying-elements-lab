// Remove the existing <main> element with ID "main"
var main = document.getElementById("main");
main.remove();

// Create a new <h1> element with ID "victory" and set its text content
var newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Sean is the champion"; // Replace YOUR-NAME with your actual name

// Append the new <h1> element to the document body
document.body.appendChild(newHeader);

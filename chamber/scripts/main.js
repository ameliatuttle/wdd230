const today = new Date();
const currentyear = document.querySelector("#currentyear");
currentyear.textContent = today.getFullYear();

document.querySelector("#lastupdated").textContent = document.lastModified;
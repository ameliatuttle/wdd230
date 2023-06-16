const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;

// declaring variables
let todaysVisit = new Date();
let lastVisitStr = localStorage.getItem("lastVisit");
let lastVisitSpan = document.querySelector("#last-vist");

// check if last visit string is null if yes set span 
// content to 0
if (lastVisitStr == null) {
    lastVisitSpan.textContent = "0";

// get todays date and get the diffrance between today
// and the localy stored date 
} else {
    lastVisitDate = new Date(lastVisitStr);
    daysSinceLastVisit = Math.floor((todaysVisit.getTime() - lastVisitDate.getTime()) / MILLISECONDS_PER_DAY);
    lastVisitSpan.textContent = daysSinceLastVisit;
}

localStorage.setItem("lastVisit", todaysVisit.toLocaleDateString());
// select the DOM elements to manipulate (we will output to these)
const datefield = document.querySelector("time");
// for european/family history format with day first.
const datefieldUK = document.querySelector("aside");
const datemessage = document.querySelector("p");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// "full" or long, medium, short options ... try them

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


toggleButton = document.querySelector("#menu-toggle");

toggleButton.addEventListener('click', (event) => {
    navbar = document.querySelector("#navbar");
    openSpan = document.querySelector("#menu-open");
    closeSpan = document.querySelector("#menu-close")
    navbar.classList.toggle('open');
    openSpan.classList.toggle('open');
    closeSpan.classList.toggle('open');
});
//hamburger menu
toggleButton = document.querySelector("#menu-toggle");

toggleButton.addEventListener('click', (event) => {
    navbar = document.querySelector("#navbar");
    openSpan = document.querySelector("#menu-open");
    closeSpan = document.querySelector("#menu-close")
    navbar.classList.toggle('open');
    openSpan.classList.toggle('open');
    closeSpan.classList.toggle('open');
});


//time box
const datefield = document.querySelector("time");
const datefieldUK = document.querySelector("aside");
const datemessage = document.querySelector("p");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


//last updated
const today = new Date();
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = today.getFullYear();

const lastupdated = document.querySelector("#lastupdated");
lastupdated.textContent = document.lastModified;


//banner
var bannernow  = new Date();        // current date/time

var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var day = weekday[bannernow.getDay()];

if (day == "Tuesday" || day == "Monday") {
    document.querySelector("#banner").textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m";

    const injectCSS = css => {
        let el = document.createElement('style');
        el.type = 'text/css';
        el.innerText = css;
        document.head.appendChild(el);
        return el;
      };

    injectCSS('#banner {padding: 5px;}');
    injectCSS('#banner {background-color: #dc882c;');
  } 
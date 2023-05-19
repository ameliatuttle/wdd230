toggleButton = document.querySelector("#menu-toggle");

toggleButton.addEventListener('click', (event) => {
    navbar = document.querySelector("#navbar");
    openSpan = document.querySelector("#menu-open");
    closeSpan = document.querySelector("#menu-close")
    navbar.classList.toggle('open');
    openSpan.classList.toggle('open');
    closeSpan.classList.toggle('open');
});
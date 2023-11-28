document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.navigation a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            links.forEach(l => l.classList.remove('selected'));
            this.classList.add('selected');

            const targetHref = this.getAttribute('href');
            history.pushState(null, null, targetHref);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const burgerCheckbox = document.getElementById("burger");
    const navUl = document.querySelector(".navigation ul");

    burgerCheckbox.addEventListener("change", function () {
        if (this.checked) {
            navUl.style.left = "0";
        } else {
            navUl.style.left = "-100%";
        }
    });
});

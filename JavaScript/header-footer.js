document.addEventListener("DOMContentLoaded", function () {
    const burgerCheckbox = document.getElementById("burger");
    const navUl = document.querySelector(".navigation ul");

    navUl.style.left = "-100%";

    burgerCheckbox.addEventListener("change", function () {
        if (this.checked) {
            navUl.style.left = "0";
        } else {
            navUl.style.left = "-100%";
        }
    });
});

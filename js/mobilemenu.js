var mobMenuButton = document.querySelector(".mob-menu");
var smallMenu = document.querySelector(".smallmenu");

mobMenuButton.addEventListener('click', function (e) {
    e.preventDefault;
    smallMenu.style.display = "flex";
})

smallMenu.addEventListener('click', function (e) {
    e.preventDefault();
    smallMenu.style.display = "none";
})
var mobMenuButton = document.querySelector(".mob-menu");
var smallMenu = document.querySelector(".smallmenu");
var  isMobileMenuOpen = false;

mobMenuButton.addEventListener('click', function (e) {
    e.preventDefault;
    smallMenu.style.display = "flex";
    isMobileMenuOpen = true;
})

smallMenu.addEventListener('click', function (e) {
    e.preventDefault();
    isMobileMenuOpen = false;
    smallMenu.style.display = "none";
})
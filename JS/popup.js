var butt = document.querySelector(".search-button");
var popup = document.querySelector(".form");

butt.addEventListener("click", function () {
    popup.classList.toggle("modal-show");
});
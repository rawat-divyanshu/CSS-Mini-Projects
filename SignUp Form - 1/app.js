document.querySelector(".banner-btn").addEventListener("click", () => {
    document.querySelector(".banner").style.display = "none";
    document.querySelector(".form-container").style.cssText = "opacity: 1; visibility: visible;";
    document.querySelector(".container").style.background = "#D2D7D3";
});

document.querySelector(".x-btn").addEventListener("click", () => {
    document.querySelector(".banner").style.display = "flex";
    document.querySelector(".form-container").style.cssText = "opacity: 0; visibility: none;";
    document.querySelector(".container").style.cssText = "background-image: url('images/background.jpg');background-position: center;background-repeat: no-repeat;background-size: cover;"
});
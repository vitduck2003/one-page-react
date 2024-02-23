document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var menuToggle = document.getElementById("menuToggle");
    if (!menu.contains(event.target) && event.target !== menuToggle) {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
    }
});

document.getElementById("menuToggle").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});
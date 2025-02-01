document.addEventListener("DOMContentLoaded", function() {
    var versionBadge = document.querySelector(".container.bottom-right");
    if (versionBadge) {
        versionBadge.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        let badge = document.querySelector(".container.bottom-right");
        if (badge) {
            badge.remove(); // Removes the element
        }
    }, 2000); // Delay to ensure it's loaded
});

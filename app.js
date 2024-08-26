const panels = document.querySelectorAll(".panel");

panels.forEach((panel, index) => {
    panel.addEventListener("mouseover", () => {
        removeActive();
        panel.classList.add("active");
    });

    panel.addEventListener("mouseout", () => {
        panel.classList.remove("active");
    });

    panel.addEventListener("click", () => {
        // Aktif olan panelin URL'sine yönlendir
        if (panel.classList.contains("active")) {
            const url = panel.getAttribute("data-url");
            window.location.href = url;
        }
    });
});

function removeActive() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}


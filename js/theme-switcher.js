document.addEventListener("DOMContentLoaded", () => {
    const themes = document.querySelectorAll(".theme-btn");

    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", savedTheme);

    themes.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const selectedTheme = e.target.dataset.theme;
            document.body.setAttribute("data-theme", selectedTheme);
            localStorage.setItem("theme", selectedTheme);
        });
    });
});

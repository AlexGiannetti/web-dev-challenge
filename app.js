document.querySelector(".switch").addEventListener("click", () => {
    var switchTheme = document.querySelector("input").checked;

    if (switchTheme === true) {
        document.querySelector("body").classList.add("dark-mode");
    } else {
        document.querySelector("body").classList.remove("dark-mode");
    }
})
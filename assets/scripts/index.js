setInterval(function () {
    const date = new Date();
    var i;
    if (date.getSeconds() < 10) {
        i = "0" + date.getSeconds();
    } else {
        i = date.getSeconds();
    }
    const format = [
        date.getHours(),
        (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(),
        i,
    ].join(":");
    document.getElementById("clock").innerHTML = format;
}, 100);

function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem("theme") === "bg-dark") {
        setTheme("bg-light");
    } else {
        setTheme("bg-dark");
    }
}
(function () {
    if (localStorage.getItem("theme") === "bg-dark") {
        setTheme("bg-dark");
    } else {
        setTheme("bg-light");
    }
})();

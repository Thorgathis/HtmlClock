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

var theme;
function setTheme(themeName) {
    theme = themeName;
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (theme === "bg-dark") {
        setTheme("bg-light");
    } else {
        setTheme("bg-dark");
    }
}
(function () {
    if (theme === "bg-dark") {
        setTheme("bg-dark");
    } else {
        setTheme("bg-light");
    }
})();

var state;
function setState(StateName, OtherState) {
    state = StateName;
    var element = document.getElementById("box");
    element.classList.add(StateName);
    element.classList.remove(OtherState);
}

function toggleState() {
    if (state === "state-2") {
        setState("state-1", "state-2");
    } else {
        setState("state-2", "state-1");
    }
}
(function () {
    if (state === "state-1") {
        setTheme("state-2", "state-1");
    } else {
        setTheme("state-1", "state-2");
    }
})();

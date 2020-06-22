function register() {
    const x = document.getElementById("Log-in");
    const y = document.getElementById("register");
    const z = document.getElementById("btn");
    if (screen.width > 900) {
        x.style.left = "-400px";
        y.style.left = "50px";
        z.style.left = "110px";
    } else {
        x.style.left = "-400px";
        y.style.left = "25px";
        z.style.left = "110px";
    }
}

function login() {
    const x = document.getElementById("Log-in");
    const y = document.getElementById("register");
    const z = document.getElementById("btn");
    if (screen.width > 900) {
        x.style.left = "50px";
        y.style.left = "450px";
        z.style.left = "0px";
    } else {
        x.style.left = "25px";
        y.style.left = "425px";
        z.style.left = "0px";
    }
}
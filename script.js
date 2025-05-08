document.getElementById("logIn").addEventListener("click", function () {
    let username = document.getElementById("uName").value;
    let password = document.getElementById("pass").value;

    if (username === "admin" && password === "admin") {
        window.location.href = "https://hasnain-rdj.github.io/Portfolio/";
    } else {
        alert("Invalid Username or Password");
    }
});

document.getElementById("clearit").addEventListener("click", function () {
    username = document.getElementById("uName").value = "";
    password = document.getElementById("pass").value = "";
});

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

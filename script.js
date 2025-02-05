document.getElementById("logIn").addEventListener("click", function () {
    let username = document.getElementById("uName").value;
    let password = document.getElementById("pass").value;

    if (username === "Hasnain" && password === "cfd@3718") {
        window.location.href = "https://22f-3718.github.io/WebEngineering_Website_Hosting/";
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
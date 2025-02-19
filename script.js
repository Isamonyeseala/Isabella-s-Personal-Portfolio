var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
       
function opentab(tabname) {
    let tablinks = document.querySelectorAll(".tab-links");
    let tabcontents = document.querySelectorAll(".tab-contents");
 
    tablinks.forEach(link => link.classList.remove("active-link"));
    tabcontents.forEach(content => content.classList.remove("active-tab"));
 
    document.querySelector(`[onclick="opentab('${tabname}')"]`).classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
document.addEventListener("DOMContentLoaded", function () {
    const sidemenu = document.getElementById("sidemenu");

    window.openmenu = function () {
        sidemenu.style.right = "0";
    };

    window.closemenu = function () {
        sidemenu.style.right = "-200px";
    };
});

const scriptURL =
    "https://script.google.com/macros/s/AKfycbw5ftpfOK9Lw2Yw_TMsA32XUAcZta2lO4MwXvIy9b6Ifert11fGGlcJVoYA3TmU7h_3/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            msg.innerHTML = "Thank You";
            setTimeout(function () {
                msg.innerHTML = " ";
            }, 5000);
            form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});
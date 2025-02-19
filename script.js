var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  let tablinks = document.querySelectorAll(".tab-links");
  let tabcontents = document.querySelectorAll(".tab-contents");

  tablinks.forEach((link) => link.classList.remove("active-link"));
  tabcontents.forEach((content) => content.classList.remove("active-tab"));

  document
    .querySelector(`[onclick="opentab('${tabname}')"]`)
    .classList.add("active-link");
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
document.addEventListener("DOMContentLoaded", function () {
  const form = document.forms["submit-to-google-sheet"];
  const msg = document.getElementById("msg");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw5ftpfOK9Lw2Yw_TMsA32XUAcZta2lO4MwXvIy9b6Ifert11fGGlcJVoYA3TmU7h_3/exec";

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          body: new FormData(form),
        });

        if (!response.ok) {
          throw new Error("Failed to submit the form.");
        }

        msg.textContent = "Thank you! Your message has been sent.";
        msg.style.color = "pink"; // Success message color

        setTimeout(() => {
          msg.textContent = "";
        }, 5000);

        form.reset();
      } catch (error) {
        console.error("Error!", error);
        msg.textContent = "An error occurred. Please try again.";
        msg.style.color = "red"; // Error message color
      }
    });
  }
});

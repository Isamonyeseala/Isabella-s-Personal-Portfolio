var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

document.addEventListener("DOMContentLoaded", function () {
  // Tab Switching Logic
  function opentab(tabname) {
    document
      .querySelectorAll(".tab-links")
      .forEach((link) => link.classList.remove("active-link"));
    document
      .querySelectorAll(".tab-contents")
      .forEach((content) => content.classList.remove("active-tab"));

    document
      .querySelector(`[onclick="opentab('${tabname}')"]`)
      .classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

  // Ensure first tab (Education) is active on page load
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tab-links").classList.add("active-link");
    document.getElementById("Education").classList.add("active-tab");
  });

  // Mobile Menu Controls
  const sidemenu = document.getElementById("sidemenu");
  if (sidemenu) {
    window.openmenu = () => (sidemenu.style.right = "0");
    window.closemenu = () => (sidemenu.style.right = "-200px");
  }

  // Google Sheets Form Submission
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

        if (!response.ok) throw new Error("Failed to submit the form.");

        msg.textContent = "Thank you! Your message has been sent.";
        msg.style.color = "green";

        setTimeout(() => (msg.textContent = ""), 5000);
        form.reset();
      } catch (error) {
        console.error("Error!", error);
        msg.textContent = "An error occurred. Please try again.";
        msg.style.color = "red";
      }
    });
  }
});

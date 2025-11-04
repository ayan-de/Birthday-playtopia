"use strict";

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}

/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}

/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// 🎥 Video Play / Pause Button Script

document.addEventListener("DOMContentLoaded", () => {
  const watchBtn = document.querySelector(".watch-btn");
  const video = document.querySelector(".video-player");

  if (watchBtn && video) {
    watchBtn.addEventListener("click", function () {
      if (video.paused) {
        video.play();
        this.innerHTML =
          '<ion-icon name="pause-circle-outline"></ion-icon> Pause';
      } else {
        video.pause();
        this.innerHTML =
          '<ion-icon name="play-circle-outline"></ion-icon> Watch Now';
      }
    });
  }
});

// 📧 Contact Form Submission

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Get form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      // Show loading message
      showMessage("Sending message...", "info");

      try {
        // Send data to backend
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
          showMessage(
            "✅ Message sent successfully! We'll get back to you soon.",
            "success"
          );
          contactForm.reset(); // Clear form
        } else {
          showMessage("❌ " + data.message, "error");
        }
      } catch (error) {
        console.error("Error:", error);
        showMessage(
          "❌ Error sending message. Please make sure the server is running.",
          "error"
        );
      }
    });
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.style.display = "block";

    // Set color based on type
    if (type === "success") {
      formMessage.style.backgroundColor = "#4CAF50";
      formMessage.style.color = "white";
    } else if (type === "error") {
      formMessage.style.backgroundColor = "#f44336";
      formMessage.style.color = "white";
    } else {
      formMessage.style.backgroundColor = "#2196F3";
      formMessage.style.color = "white";
    }

    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  }
});

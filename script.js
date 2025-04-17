document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav-link");

  // Highlight active nav link
  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Get or prompt for username
  let username = localStorage.getItem("sobieUsername");

  if (!username) {
    username = prompt("Welcome! Please enter your name:");
    if (username) {
      localStorage.setItem("sobieUsername", username);
    } else {
      username = "Guest";
    }
  }

  // Display username in user panel
  const userNameSpans = document.querySelectorAll(".user-name");
  userNameSpans.forEach(span => {
    span.textContent = username;
  });

  // Optional greeting on account page
  if (currentPage === "account.html") {
    alert(`👋 Welcome back, ${username}!`);
  }

  console.log("SOBIE site JS active on:", currentPage);
});

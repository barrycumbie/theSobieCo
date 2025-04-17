
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  console.log("SOBIE site JS is active on:", currentPage);

  if (currentPage === "account.html") {
    alert("👋 Welcome back, User!");
  }
});

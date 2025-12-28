const form = document.getElementById("contactForm");
const msgBox = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    msgBox.className = "message error";
    msgBox.textContent = "❌ Please fill in all fields correctly.";
    return;
  }

  msgBox.className = "message success";
  msgBox.textContent = "✅ Your form has been submitted successfully!";

  form.reset();

  setTimeout(() => {
    msgBox.style.display = "none";
  }, 4000);
});

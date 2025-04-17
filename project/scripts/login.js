document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
  
    // Dummy credentials for demo
    const validUsername = "admin";
    const validPassword = "1234";
  
    if (username === "" || password === "") {
      errorMessage.textContent = "Both fields are required.";
    } else if (username === validUsername && password === validPassword) {
      alert("Login successful!");
      // Redirect or clear form if needed
      window.location.href = "dashboard.html"; // Replace with your next page
    } else {
      errorMessage.textContent = "Invalid username or password.";
    }
  });
  
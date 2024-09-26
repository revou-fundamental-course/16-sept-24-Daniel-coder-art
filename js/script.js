// Welcome message with user's name
function setWelcomeMessage() {
    const userName = prompt("Please enter your name:");
    const userNameSpan = document.getElementById("user-name");
    userNameSpan.textContent = userName || "Guest";
}

// Form validation
function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    
    if (!name || !email || !phone || !message) {
        alert("Please fill in all fields");
        return;
    }
    
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }
    
    if (!isValidPhone(phone)) {
        alert("Please enter a valid phone number");
        return;
    }
    
    displayFormResult(name, email, phone, message);
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^\d{10,14}$/;
    return re.test(phone);
}

function displayFormResult(name, email, phone, message) {
    const resultDiv = document.getElementById("form-result");
    resultDiv.innerHTML = `
        <h3>Form Submission Result:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
}

// Event listeners
document.addEventListener("DOMContentLoaded", setWelcomeMessage);
document.getElementById("contact-form").addEventListener("submit", validateForm);
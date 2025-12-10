// Set the year in the footer on every page
const setYear = () => {
    const yearSpan = document.querySelector("#year");

    if (yearSpan) {
        const now = new Date();
        yearSpan.textContent = now.getFullYear();
    }
};

// Initialize contact form validation (only runs on contact.html)
const initContactForm = () => {
    const form = document.querySelector("#contactForm");

    // If there is no form on this page, do nothing
    if (!form) {
        return;
    }

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");
    const messageError = document.querySelector("#messageError");
    const status = document.querySelector("#formStatus");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let hasError = false;

        // Reset status text
        status.textContent = "";
        status.style.color = "";

        // NAME VALIDATION
        if (!nameInput.value.trim()) {
            // Error message
            nameError.classList.remove("d-none");
            hasError = true;
        } else {
            nameError.classList.add("d-none");
        }

        // EMAIL VALIDATION
        const emailValue = emailInput.value.trim();
        if (
            !emailValue ||
            emailValue.indexOf("@") === -1 ||
            emailValue.indexOf(".") === -1
        ) {
            emailError.classList.remove("d-none");
            hasError = true;
        } else {
            emailError.classList.add("d-none");
        }

        // MESSAGE VALIDATION
        if (!messageInput.value.trim()) {
            messageError.classList.remove("d-none");
            hasError = true;
        } else {
            messageError.classList.add("d-none");
        }

        // General error messages for any detected errors
        if (hasError) {
            status.textContent = "Please fix the errors above and try again.";
            status.style.color = "red";
            return;
        }

        // Successful submit
        form.reset();
        status.textContent = "Thanks! Your message has been submitted.";
        status.style.color = "green";
    });
};

// Run code after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    setYear();
    initContactForm();
});

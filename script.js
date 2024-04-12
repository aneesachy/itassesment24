document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting by default

        // Validate form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const number = document.getElementById('number').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        if (email === '') {
            alert('Please enter your email.');
            return;
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (number === '') {
            alert('Please enter your number.');
            return;
        }

        // Optional: Add more validation for number, message, etc.

        // If all validations pass, you can submit the form here
        alert('Form submitted successfully!'); // Example
        contactForm.reset(); // Optional: Clear form inputs after submission
    });
});

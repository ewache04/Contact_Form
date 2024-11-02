document.addEventListener("DOMContentLoaded", function() {
    function adjustColumns() {
        var windowWidth = window.innerWidth;

        // Adjust column classes based on window width
        if (windowWidth < 768) {
            $('.radio-input').removeClass('col-6').addClass('col-12');
        } else {
            $('.radio-input').removeClass('col-12').addClass('col-6');
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        const form = document.getElementById("contact-form");
        const outputParagraph = document.getElementById("output");
        const modal = document.getElementById("output-modal");

        // Gather form values
        const formData = new FormData(form);
        const firstName = formData.get("first_name");
        const lastName = formData.get("last_name");
        const email = formData.get("email_address");
        const queryType = formData.get("query_type");
        const message = formData.get("message");

        // Display the entered values in the output paragraph with line breaks
        outputParagraph.innerHTML = `Thank you, ${firstName} ${lastName}.<br>We have received your ${queryType} query.<br>We will get back to you at ${email}.<br>Your message: "${message}"`;

        // Show the modal
        modal.style.display = "block";
    }

    function closeModal() {
        const modal = document.getElementById("output-modal");
        const form = document.getElementById("contact-form");
        const outputParagraph = document.getElementById("output");

        // Hide the modal
        modal.style.display = "none";

        // Reset form fields
        form.reset();
        outputParagraph.innerHTML = ""; // Clear the output
    }

    function initialize() {
        const form = document.getElementById("contact-form");
        const closeButton = document.getElementById("close-button");

        // Call adjustColumns to set initial layout
        adjustColumns();

        // Add form submit event listener
        form.addEventListener("submit", handleFormSubmit);

        // Add close button event listener
        closeButton.addEventListener("click", closeModal);

        // Add window resize event listener for column adjustments
        window.addEventListener('resize', adjustColumns);
    }

    initialize(); // Initialize the form and event listeners
});

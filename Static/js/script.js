document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const outputParagraph = document.getElementById("output");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form values
        const formData = new FormData(form);
        const firstName = formData.get("first_name");
        const lastName = formData.get("last_name");
        const email = formData.get("email_address");
        const queryType = formData.get("query_type");
        const message = formData.get("message");

        // Display the entered values in the output paragraph with line breaks
        outputParagraph.innerHTML = `Thank you, ${firstName} ${lastName}.<br>We have received your ${queryType} query.<br>We will get back to you at ${email}.<br>Your message: "${message}"`;
    });
});

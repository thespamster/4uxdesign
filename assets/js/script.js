/*  function to send an email via emailjs */

function sendMail(contactForm) {
    emailjs.send("gmail","4uxdesign", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    alert("Thank you. I will get back to you within 48hrs.");
    getElementById("project-form").reset();
    return false;
}
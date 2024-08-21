// waits for the html and css to load before running the JS
window.onload = function() {

//  function to send an email via emailjs 

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

// JS for the cookie banner
document.getElementById("cookieBanner").style.display = "none"; // hides the cookie banner
    
// function to set a cookie when the 'accept cookies' button is pressed
document.getElementById("acceptCookies").addEventListener("click", function() {
    console.log("Button clicked, cookie set");
    document.cookie = "cookiesAccepted=YES; expires=Thu 31 Dec 3000 12:00:00 UTC; path=/"; // sets a cookie
    document.getElementById("cookieBanner").style.display = "none";
});
    
// function to check for a cookie
function checkCookie() {
    let cookieSet = document.cookie; // looks for a cookie
    console.log("Cookie",cookieSet);
    if (cookieSet == "") {
        console.log("No cookie set");
        document.getElementById("cookieBanner").style.display = "block"; // if no cookie show cookie banner
    } 
}
    
checkCookie();
}
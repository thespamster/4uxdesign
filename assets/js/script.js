// waits for the html and css to load before running the JS
window.onload = function() {

//  function to send an email via emailjs 
function sendMail(contactForm) {
    console.log('trying to send email');
    emailjs.send("service_q1hqwho", "4uxdesign", {
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
    // getElementById("messageMe").reset();
    return false;
}

// JS for the cookie banner
document.getElementById("cookieBanner").style.display = "none"; // hides the cookie banner
    
// function to set a cookie when the 'accept cookies' button is pressed
document.getElementById("acceptCookie").addEventListener("click", function() {
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

// When the user scrolls down 250px from the top of the document, show the 'back to the top' button
window.onscroll = function (e) { 
    var kofiButton = document.getElementById("kofiButton");
    if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
    ) {
        kofiButton.classList.remove("hideButton");
        kofiButton.classList.add("showButton");
        kofiButton.classList.add("fade-in");
    } else {
        kofiButton.classList.remove("showButton");
        kofiButton.classList.add("hideButton");
        kofiButton.classList.remove("fade-in");
    }
}

// Bootstrap5 alert customised for ko-fi
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible alert-style" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Ko-Fi is a way of making a smaller donation to what I do. Only give what you can afford as donations are non-refundable. THANK YOU!', 'success')
    })
}

// fade cookie banner on scroll
window.addEventListener('scroll', function() {
    const fadeDiv = document.getElementById('cookieBanner');
    const fadeDiv1 = document.getElementById('navMenu');
    let scrollPosition = window.scrollY;
    let maxScroll = 150;
    let opacity = Math.round((1 - (scrollPosition / maxScroll)) * 100) / 100;
    let opacity1 = Math.round((4-(scrollPosition / maxScroll)) * 100) / 100;
    fadeDiv.style.opacity = opacity;
    fadeDiv1.style.opacity = opacity1;
    if (opacity <= 0) {
        fadeDiv.classList.add('d-none');
    } else {
        fadeDiv.classList.remove('d-none');
        fadeDiv.classList.add('d-block');
    }
    if (opacity1 <= 0) {
        fadeDiv1.classList.add('d-none');
    } else {
        fadeDiv1.classList.remove('d-none');
        fadeDiv1.classList.add('d-block');
    }
});



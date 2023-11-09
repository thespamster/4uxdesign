var explosion = new Audio('assets/mixkit-masive-explosion-in-battle-2777.wav');
/*  set a couple of global variables and a couple of events */

window.setInterval(timedText, 5000);
var textCount = 0
var button = document.getElementsByTagName("button");
button[0].addEventListener("click", clickedButton);

/*  function to press and then unpress the big red button */

function clickedButton() {
    var button = document.getElementsByClassName("bigButton");
    button[0].classList.add('pressed');
    setTimeout (removePress, 500);
}

function closeCall() {
    window.alert("Nooooooooo!!! Phew, It was just a sound effect. Seriously? It even says 'Don't Press'. Sit down and have a word with yourself.");
}

function removePress() {
    var button = document.getElementsByClassName("bigButton");
    button[0].classList.remove('pressed');
    explosion.play();
    explosion.addEventListener("ended", closeCall);
}

/*  function to change the text in the main section of the page */

function timedText() { 
    let textToDisplay = [ "I am a great believer in a minimalist approach to web design. Less is more. Smart design means no clutter.", 
    "To learn a bit more about me click the icon above to download a copy of my current CV.", 
    "Hobbies include 3-string cigarbox guitar, I love a murder mystery read and I'm a huge fan of Dr. Who.", 
    "Whatever you do don't press the big red button!!! "];
    var textHere = document.getElementById("changingText");
    var newText = textToDisplay[textCount];
    textHere.innerHTML = newText;
    var dotCounter = document.getElementById('dotCounter');

    if (textCount === 0) {
        dotCounter.children[3].classList.remove('fa-solid');
        dotCounter.children[3].classList.add('fa-regular')
        dotCounter.children[textCount].classList.remove('fa-regular');
        dotCounter.children[textCount].classList.add('fa-solid');
    } else if (textCount === 1) {
        dotCounter.children[0].classList.remove('fa-solid');
        dotCounter.children[0].classList.add('fa-regular')
        dotCounter.children[textCount].classList.remove('fa-regular');
        dotCounter.children[textCount].classList.add('fa-solid');
    } else if (textCount ===2) {  
        dotCounter.children[1].classList.remove('fa-solid');
        dotCounter.children[1].classList.add('fa-regular')
        dotCounter.children[textCount].classList.remove('fa-regular');
        dotCounter.children[textCount].classList.add('fa-solid');
    } else {
        dotCounter.children[2].classList.remove('fa-solid');
        dotCounter.children[2].classList.add('fa-regular')
        dotCounter.children[textCount].classList.remove('fa-regular');
        dotCounter.children[textCount].classList.add('fa-solid');
    }

    textCount++;
    if (textCount >= textToDisplay.length) {
        textCount = 0;
    } 
}

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
    alert("Cheers! You can also message me on 07423463521.");
    getElementById("project-form").reset();
    return false;
}
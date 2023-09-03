
/*  set a couple of global variables and a couple of events */

window.setInterval(timedText, 5000);
button[0].addEventListener("click", clickedButton);
var textCount = 0
var button = document.getElementsByTagName("button");

/*  function to press and then unpress the big red button */

function clickedButton() {
    var button = document.getElementsByClassName("bigButton");
    button[0].classList.add('pressed');
    setTimeout (removePress, 500);
}

function removePress() {
    var button = document.getElementsByClassName("bigButton");
    button[0].classList.remove('pressed');
    window.alert("Nooooooooo!!! Phew, nothing happened. Seriously? It even says 'do not press'. Sit down and have a word with yourself.");
}

/*  function to change the text in the main section of the page */

function timedText() { 
    let textToDisplay = [ "I am a great believer in a minimalist approach to web design. Less is more. Smart design doesn't mean cluttered.", 
    "Click the icon above to download a copy of my current CV.", "Hobbies include 3-string cigarbox guitar, love a murder mystery read and I am a huge Dr. Who fan.", "Whatever you do don't press the big red button! "];
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
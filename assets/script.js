window.setInterval(timedText, 5000);
var textCount = 0

var button = document.getElementsByTagName("button");
button[0].addEventListener("click", clickedButton);

function clickedButton() {
    var button = document.getElementsByClassName("bigButton");
    button[0].classList.add('pressed');
    setTimeout (removePress, 500);
}

function removePress() {
    var button = document.getElementsByClassName("bigButton");
    button[0].classList.remove('pressed');
    window.alert("You couldn't help yourself could you!");
}

function timedText() {
    
    let textToDisplay = [ "I am a great believer in a minimalist approach to web design. Less is more. Smart design doesn't mean cluttered.", "The programming languages I use include HTML, CSS, Javascript, Python and SQL. I use libraries such as Bootstrap and Tailwind for CSS.", "Outside of coding I love playing guitar, reading (murder mystery is a fave here), borderline obsessed with Dr. Who and sci-fi in general.", "Whatever you do don't press the big red button! "];

    var textHere = document.getElementById("changingText");
    var newText = textToDisplay[textCount];
    textHere.innerHTML = newText;

    var dotCounter = document.getElementById('dotCounter');

    if (textCount === 0) {
        dotCounter.children[3].classList.remove('fa-circle');
        dotCounter.children[3].classList.add('fa-circle-o')
        dotCounter.children[textCount].classList.remove('fa-circle-o');
        dotCounter.children[textCount].classList.add('fa-circle');
    } else if (textCount === 1) {
        dotCounter.children[0].classList.remove('fa-circle');
        dotCounter.children[0].classList.add('fa-circle-o')
        dotCounter.children[textCount].classList.remove('fa-circle-o');
        dotCounter.children[textCount].classList.add('fa-circle');
    } else if (textCount ===2) {  
        dotCounter.children[1].classList.remove('fa-circle');
        dotCounter.children[1].classList.add('fa-circle-o')
        dotCounter.children[textCount].classList.remove('fa-circle-o');
        dotCounter.children[textCount].classList.add('fa-circle');
    } else {
        dotCounter.children[2].classList.remove('fa-circle');
        dotCounter.children[2].classList.add('fa-circle-o')
        dotCounter.children[textCount].classList.remove('fa-circle-o');
        dotCounter.children[textCount].classList.add('fa-circle');
    }

    textCount++;
    if (textCount >= textToDisplay.length) {
        textCount = 0;
    } 
}
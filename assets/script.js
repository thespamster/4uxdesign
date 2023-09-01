window.setInterval(timedText, 5000);
var textCount = 0

function timedText() {
    console.log(textCount);
    let textToDisplay = [ "this is the first lot of text", "this is the second lot of text", "this is the third lot of text", "this is the fourth lot of text"];

    var textHere = document.getElementById("changingText");
    var newText = textToDisplay[textCount];
    textHere.innerHTML = newText;
    textCount++;
    if (textCount >= textToDisplay.length) {
        textCount = 0;
    } 
}
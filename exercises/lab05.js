

function askNumber(whatNumber) {
    let userNumber = prompt("Guess 0-500");

    if (userNumber == whatNumber) {
        $("#output").html("You got it!");
    }
    else {
        $("#output").html("Noooooope");
    }
}

$("#good-button").click(function () {
    askNumber(420);
});
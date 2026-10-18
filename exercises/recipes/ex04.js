// the clicker button program

let count=0;

$("#needy-button").click( function(){
    // what to do when button is clicked
count = count + 1 / 10;
$("#needy-button").html( count + " times you didn't listen to me");
});
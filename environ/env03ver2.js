let environmentTitle = "Cemetery Drive, November 1";
let anniversaryDate = "13th anniversary";
let clickCount = 0;
let whisperState = "calm";

let atmosphericElements = [
    "It smells like rain and moss.",
    "You feel weightless. Your mind is quiet.",
    "Forgotten memories are emerging..."
];

let mainEntity = {
    name: "Loved One",
    type: "Spirit / Memory",
    mood: "sorrowful and familiar",
    message: "It can't speak. He wants you to know he misses you too."
};

function reactToWhisper(tone) {
    if (tone === "startled") {
        $("#ghost").addClass("ghost-vanished");
        $("#environment-output").html("You startle the spirit—it dissolves into the mist.");
    } else {
        $("#ghost").removeClass("ghost-vanished");
        $("#environment-output").html("The air settles and the ghost reappears before you.");
    }
}

$(document).ready(function() {

    $("#title").click(function() {
        $("#environment-output").html(`<strong>Environment:</strong> ${environmentTitle} (${anniversaryDate})`);
    });

    $("#elements").click(function() {
        let listHtml = "<strong>YOU</strong><ul>";
        for (let i = 0; i < atmosphericElements.length; i++) {
            listHtml += `<li>${atmosphericElements[i]}</li>`;
        }
        listHtml += "</ul>";
        $("#environment-output").html(listHtml);
    });

    $("#entity").click(function() {
        $("#environment-output").html(`<strong>Entity:</strong> ${mainEntity.name} — ${mainEntity.mood}. "${mainEntity.message}"`);
    });

    $("#counter").click(function() {
        clickCount++;
        $("#environment-output").html(`You have interacted with the spirit <strong>${clickCount}</strong> time(s).`);
    });

    $("#whisper").click(function() {
        if (whisperState === "calm") {
            whisperState = "startled";
        } else {
            whisperState = "calm";
        }
        reactToWhisper(whisperState);
    });

});
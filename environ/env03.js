
let environmentTitle = "Cemetery Drive, November 1";
let anniversaryDate = "13th anniversary";
let clickCount = 0;


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


$(document).ready(function() {

    
    $("#btn-title").click(function() {
        $("#environment-output").html(`<strong>Environment:</strong> ${environmentTitle} (${anniversaryDate})`);
    });

   
    $("#btn-elements").click(function() {
        let listHtml = "<strong>YOU</strong><ul>";
        for (let i = 0; i < atmosphericElements.length; i++) {
            listHtml += `<li>${atmosphericElements[i]}</li>`;
        }
        listHtml += "</ul>";
        $("#environment-output").html(listHtml);
    });

    
    $("#btn-entity").click(function() {
        $("#environment-output").html(`<strong>Entity:</strong> ${mainEntity.name} — ${mainEntity.mood}. "${mainEntity.message}"`);
    });

    
    $("#btn-counter").click(function() {
        clickCount++;
        $("#environment-output").html(`You have interacted with the spirit <strong>${clickCount}</strong> time(s).`);
    });

});
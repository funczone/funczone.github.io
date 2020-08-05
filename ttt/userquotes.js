/* the collection of submitted user quotes from the func.zone community */
/* last updated: 08/04/20 (initial update) */
var userquotes = [
    "\"the rare blue traitor\"",
    "\"<a href='https://fuck.zone'>fuck.zone</a>\"", // credit: squall
    "\"server is dying cause steven sucked his own dick too hard\"", // credit: bunnies
    "\"detective car\"", // credit: chevin + cobb
    "\"dEaD sErVeR\"",
    "\"Want to feature a quote or some other message here? Send it to Steven, and he'll add it! :D\""
];
document.getElementById("quote").innerHTML = userquotes[Math.floor(Math.random() * userquotes.length)];
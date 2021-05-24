/* A collection of submitted user quotes from the func.zone community. */
let userquotes = [
    "\"the rare blue traitor\"",
    "\"server is dying cause steven sucked his own dick too hard\"",
    "\"detective car\"",
    "\"fart gun\"",
    "\"dEaD sErVeR\"",
    "\"Want to feature a quote or some other message here? Send it to Steven, and he'll (maybe) add it! :D\"",
    "<img src='../assets/ttt/man.png' style='height:16px;'>",
    "\"Not @FuncZ on twitter!\"",
    "\"Does anyone actually read these?\"",
    "\"Populate!\"",
    "\"only func inside anime girls\""
];
document.getElementById("quote").innerHTML = userquotes[Math.floor(Math.random() * userquotes.length)];
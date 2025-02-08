"use strict"; // prevent browser from globally auto-declaring variables

function MakeBall({
    ballTitle = "Unknown ball",
    initStyle = "",
    altStyle = ""
}) {

    // This is the DOM element that will be returned.
    var ballObj = document.createElement("div");
    ballObj.classList.add("ball"); // style object with the ".ball" rules from file ball.css

    if (initStyle.length > 0) {
        ballObj.classList.add(initStyle); // style object with the ".ball" rules from file ball.css
    }

    // since nothing will change about the innerHTML, no need to have a display function and call it.
    ballObj.innerHTML = ballTitle;

    ballObj.onmouseover = function () {
        if (altStyle.length > 0) {
            ballObj.classList.add(altStyle);
            ballObj.classList.remove(initStyle);
        }
    };

    ballObj.onmouseout = function () {
        if (initStyle.length > 0) {
            ballObj.classList.add(initStyle);
            ballObj.classList.remove(altStyle);
        }
    };

    return ballObj;
}
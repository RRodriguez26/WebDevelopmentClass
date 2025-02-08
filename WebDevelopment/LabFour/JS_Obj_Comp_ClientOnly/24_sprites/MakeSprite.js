"use strict"; // prevent browser from globally auto-declaring variables

function MakeSprite({
    poseList = null, // list of objects with properties bgx and bgy (which will become
    // background-position-x and background-position-y). 
    // Each object selects a sprite pose from the BG image.
    top = 380, // initial top position of sprite
    left = 880, // initial left position of sprite
    millisecs = 125, // how often the sprite moves (in milliseconds)
    dx = -10, // # pixels the sprite moves left/right (- is left, + is right) when it moves
    xrand = 0, // #pixels of randomness in each left/right movement 
    dy = -10, // #pixels the sprite moves up/down (- is up, + is down) when it moves
    yrand = 0, // #pixels of randomness in each up/down movement
    stopCondition = null // JS code (will be evaluated) that says when animation stops 
    // e.g., left (or top) > or < some value
}) {

    function makeRandomNumber(low, high) { // returns a random integer in this range: low..high
        var random = Math.random();  // returns a real number between 0 and 1
        var diff = high - low + 1;  // determine the distance between the high and low. 
        // Math.floor returns an integer truncating any real number after the decimal point.
        return Math.floor(random * diff + low);
    }

    // ENTRY POINT

    var sprite = document.createElement("div");
    sprite.classList.add("sprite");

    // check if the poseList (list of poses) has what it needs.
    if (poseList == null) {
        alert("cannot create an animated sprite without a poseList");
        return sprite;
    } else if (!poseList[0]) {
        alert("cannot create an animated sprite if poseList does not contain at least one object");
        return sprite;
    } else if (!poseList[0].bgx || !poseList[0].bgy) {
        alert("cannot create an animated sprite if poseList objects do not contain properties bgx and bgy");
        return sprite;
    } 
    console.log(poseList);

    // write a warning in the console log if the consumer did not provide a stop condition.
    if (stopCondition == null) {
        console.log("warning: no stop condition provided, so the animation will go forever.");
    }

    var poseIdx = 0; // index of posList (tells which pose is currently being shown)

    function advancePose() {
        // advance to next pose of sprite set image (set background-position-x and y from the posList array)
        poseIdx++;
        if (poseIdx >= poseList.length) {
            poseIdx = 0;
        }
        sprite.style.backgroundPositionX = poseList[poseIdx].bgx;
        sprite.style.backgroundPositionY = poseList[poseIdx].bgy;
    };

    function move() {
        top += dy + makeRandomNumber(-yrand, yrand);
        left += dx + makeRandomNumber(-xrand, xrand);
        sprite.style.top = top + "px";
        sprite.style.left = left + "px";
        console.log("top style " + sprite.style.top);
        console.log("left style " + sprite.style.left);
    };

    function render() {
        move();
        advancePose();

        if (stopCondition) {  // if the consumer provided a stop condition... 
            if (!eval(stopCondition)) { // don't continue if the stop condition evaluates to true
                timer = setTimeout(render, millisecs);
            }
        }
    }

    // kick off initial rendering (each rendering kicks off the next rendering until stopCondition is true)
    var timer = setTimeout(render, millisecs);
    return sprite;
}
"use strict"; // prevent browser from globally auto-declaring variables

function MakeCounter({
    counterTitle = "Unknown Counter",
    counterStyle = "",
    counterInitVal = 0
}) {

    // This is the DOM element that will be returned.
    var counterObj = document.createElement("div");
    counterObj.classList.add("counter"); // style object with the ".counter" rules from file counter.css
    if (counterStyle.length > 0) {
        counterObj.classList.add(counterStyle); 
    }

    // Not going to have any public data members 
    // counterObj.condition = theCondition;

    // private property (data member) of counterObj (like any variable normally declared in this function). 
    var val = counterInitVal;

    // private method display, refreshes the div with current values of data members 
    var display = function () {
        counterObj.innerHTML = `
            <h4>${counterTitle}</h4>
            <h3>${val}</h3>
        `;
    };
    display(); // invoke display initially or the counter div until first click

    counterObj.onclick = function () {
        val++;
        display(); // show updated property on the page
    };

    return counterObj;
}
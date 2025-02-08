"use strict"; // prevent browser from globally auto-declaring variables

function MakeCar_events({
    theCondition = "unknown condition",
    thePrice = 0
}) {

    var carObj = document.createElement("div");

    // link the styling of carObj to all the styles that start with ".car"
    // which (if following our CSS naming convention) are all in file: "car.css"
    carObj.classList.add("car");

    // first use of “.condition” creates custom (public) property in carObj.
    var condition = theCondition;

    // price is private (a variable declared normally in the MakeCar function)
    var price = thePrice;

    // create an Info div where condition and price can be displayed
    // (separate from the rest of the UI, e.g., input boxes and buttons)
    var carInfo = document.createElement("div");
    carObj.appendChild(carInfo);

    // private method display, populates the Info div with current values for 
    // condition and price. 
    var display = function () {
        carInfo.innerHTML = "Car condition: " + condition + "<br/> price: " +
            formatCurrency(price);
    };
    display();

    // Could also have defined function display "the regular way"
    // instead of the "assignment style way" like above. 
    // function display() {
    // ...
    // }

    // Condition setter method (public)
    function setCondition (newCondition) {
        condition = newCondition;
        display(); // show updated property on the page
    }

    // public method to modify price 
    var changePrice = function (changeRate) {
        var n = Number(changeRate);
        console.log("changing price by this rate " + n);
        price = price * (1 + n);
        display(); // show updated price on the page
    };

    // Create User Interface for setting condition
    var conditionButton = document.createElement("button");
    conditionButton.innerHTML = "Change Condition to: ";
    carObj.appendChild(conditionButton);

    var newConditionInput = document.createElement("input");
    carObj.appendChild(newConditionInput);

    conditionButton.onclick = function () {
        setCondition(newConditionInput.value);
    };

    carObj.appendChild(document.createElement("br")); // new line

    // create User interface for changing price
    var priceButton = document.createElement("button");
    priceButton.innerHTML = "Change price by factor: ";
    carObj.appendChild(priceButton);

    var priceFactor = document.createElement("input");
    carObj.appendChild(priceFactor);

    priceButton.onclick = function () {
        changePrice(priceFactor.value);
    };

    // private function, can only be used within function MakeCar
    function formatCurrency(numStr) {

        numStr += ""; // convert to string, if it's not a string.

        // remove formatting characters, if there are any
        numStr = numStr.replace("$", "");
        numStr = numStr.replace(",", "");

        var num = Number(numStr); // convert to number again.

        var formattedNum = num.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
        console.log("formattedNum:" + formattedNum);
        return formattedNum;
    }

    return carObj;
}
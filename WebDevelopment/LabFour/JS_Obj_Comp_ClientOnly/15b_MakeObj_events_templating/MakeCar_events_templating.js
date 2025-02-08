"use strict"; // prevent browser from globally auto-declaring variables

function MakeCar_events_templating( {
theCondition = "unknown condition",
        thePrice = 0
        }) {

    // This is the DOM element that will be returned.
    var carObj = document.createElement("div");

    carObj.classList.add("car"); // style object with the ".car" rules from file car.css

    // first use of “.condition” creates custom (public) property of carObj
    carObj.condition = theCondition;

    // price is private property of carObj (because normal variable declaration in MakeCar
    var price = thePrice;

    // Condition setter method (public) - could be used from outside MakeCar
    carObj.setCondition = function (newCondition) {
        carObj.condition = newCondition;
        display(); // show updated property on the page
    };

    // public method to modify price 
    carObj.changePrice = function (changeRate) {
        var n = Number(changeRate);
        console.log("changing price by this rate " + n);
        price = price * (1 + n);
        display(); // show updated price on the page
    };

    // Build the UI with back tick, more similar to how you would create things coding with HTML.
    // Add a class to every DOM element that you want to style and/or access with JavaScript. 
    carObj.innerHTML = `
      <div class='carInfoClass'></div>
      <button class='conditionButtonClass'>Change Condition to: </button>
      <input class='newConditionInputClass'/> <br/>
      <button class='priceButtonClass'>Change Price By Factor: </button>
      <input class='priceFactorInputClass'/> 
    `;

    // Create variable references for all DOM elements (above) that we need to programatically access. 
    var carInfo = carObj.getElementsByClassName("carInfoClass")[0];
    var conditionButton = carObj.getElementsByClassName("conditionButtonClass")[0];
    var newConditionInput = carObj.getElementsByClassName("newConditionInputClass")[0];
    var priceButton = carObj.getElementsByClassName("priceButtonClass")[0];
    var priceFactor = carObj.getElementsByClassName("priceFactorInputClass")[0];

    // private method display, refreshes the Info div with current values for 
    // condition and price. 
    var display = function ( ) {
        carInfo.innerHTML = `
          <p>
             Condition: ${carObj.condition} <br/>
             Price: ${formatCurrency(price)}
          </p>
        `;
    };
    display(); // do this or the carInfo area will be blank initially

    conditionButton.onclick = function () {
        carObj.setCondition(newConditionInput.value);
    };

    priceButton.onclick = function () {
        carObj.changePrice(priceFactor.value);
    };

    function strToNum(str) {
        str += ""; // convert to string, if it's not a string.

        // remove formatting characters, if there are any
        str = str.replace("$", "");
        str = str.replace(",", "");

        var num = Number(str); // convert to number again.
        return num;
    }

    // private function, can only be used within function MakeCar
    function formatCurrency(numStr) {

        var num = strToNum(numStr); // convert formatted string to number.

        var formattedNum = num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
        console.log("formattedNum:" + formattedNum);
        return formattedNum;
    }

    return carObj;
}
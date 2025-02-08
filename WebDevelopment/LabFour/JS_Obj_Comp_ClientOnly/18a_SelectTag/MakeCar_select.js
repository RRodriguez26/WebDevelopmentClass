"use strict"; // prevent browser from globally auto-declaring variables

function MakeCar_select( {
        carName = "unknown car",
        year = "unknown year",
        condition = "1"
        }) {

    var carObj = document.createElement("div");
    carObj.classList.add("car"); // style object with the ".car" rules from file car.css

    carObj.innerHTML = `<h3>${carName}</h3>
        Year: ${year}<br/>
        Condition: <select class="selectConditionC">
            <option value="5">Excellent</option>
            <option value="4">Good</option>
            <option value="3">Fair</option>
            <option value="2">Poor</option>
            <option value="1">Unknown</option>
        </select>
        <br/><br/>
        <div class="carInfoC"></div>
    `;

    // create variables for all aspects of carObj.innerHTML that we need to reference
    var selectCondition = carObj.getElementsByClassName("selectConditionC")[0];
    // set the initial value of the <select> tag based on consumer's condition property
    selectCondition.value = condition;

    var carInfo = carObj.getElementsByClassName("carInfoC")[0];

    // when the user selects a different value from the select tag, redisplay the component
    selectCondition.onchange = function () {
        display();
    };

    function display() {
        carInfo.innerHTML = `This car's rating is ${selectCondition.value}`;
    }
    display();

    return carObj;
}
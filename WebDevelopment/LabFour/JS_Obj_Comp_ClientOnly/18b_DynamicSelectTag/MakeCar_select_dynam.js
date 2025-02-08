"use strict"; // prevent browser from globally auto-declaring variables

function MakeCar_select_dynam({
    carName = "unknown car",
    year = "unknown year",
    conditionList = [{"display":"Condition Values Not Supplied", "val":1}],
    condition = "1"
}) {

    var carObj = document.createElement("div");
    carObj.classList.add("car"); // style object with the ".car" rules from file car.css

    carObj.innerHTML = `<h3>${carName}</h3>
        Year: ${year}<br/>
        <select class="selectConditionC">
        </select>
        <div class="carInfoC"></div>
    `;

    // create variables for all aspects of carObj.innerHTML that we need to reference
    var selectCondition = carObj.getElementsByClassName("selectConditionC")[0];
    var carInfo = carObj.getElementsByClassName("carInfoC")[0];

    // put the options into the select tag (from conditionList)
    for (var listEle of conditionList) {
        var opt = document.createElement("option");
        opt.innerHTML = listEle.display;
        opt.value=listEle.val;
        selectCondition.appendChild(opt);
    }
    selectCondition.value = condition;

    // when the user selects a different value from the select tag, redisplay the component
    selectCondition.onchange = function() {
        display();
    };

    function display() {
        carInfo.innerHTML = `This car's rating is ${selectCondition.value}`;
    }
    display();

    return carObj;
}
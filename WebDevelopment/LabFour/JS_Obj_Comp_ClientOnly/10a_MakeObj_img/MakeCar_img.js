"use strict"; // prevent browser from globally auto-declaring variables

function MakeCar_img({ 
    carName="unknown car", 
    condition = "probably good", 
    price=1000, 
    imgURL=null
}) {

    var carObj = document.createElement("div");
    carObj.classList.add("car"); // style object with the ".car" rules from file car.css

    // Create h3 DOM element to hold the name and append to carObj
    var carHeader = document.createElement("h3");
    carHeader.innerHTML = carName;
    carObj.appendChild(carHeader);

    // Create p DOM element to hold condition and price and append to carObj
    var carInfo = document.createElement("p");
    carInfo.innerHTML =
        "  Condition: " + condition +
        "  <br/>" +
        "  Price: " + formatCurrency(price);
    carObj.appendChild(carInfo);

    if (imgURL==null) {
        var carImgEr = document.createElement("p");
        carImgEr.innerHTML = "image not available";
        carObj.appendChild(carImgEr);
    } else {
        // create img DOM element, set it's src attribute, and append to carObj
        var carImg = document.createElement("img");
        carImg.src = imgURL;
        carObj.appendChild(carImg);
    }

    // private function, can only be used within function MakeCar
    function formatCurrency (numStr) {

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
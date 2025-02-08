"use strict"; // prevent browser from globally auto-declaring variables

function MakeCar_img_templating({
    carName = "unknown car",
    condition = "probably good",
    price = 1000,
    imgURL = null
}) {

    var carObj = document.createElement("div");
    carObj.classList.add("car"); // style object with the ".car" rules from file car.css

    carObj.innerHTML = `<h3>${carName}</h3>
        <p>Condition: ${condition}<br/>
           Price: ${formatCurrency(price)}
        </p>`;
    if (imgURL == null) {
        carObj.innerHTML += "<p>image not available</p>";
    } else {
        carObj.innerHTML += `<img src='${imgURL}'/>`;
    }

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
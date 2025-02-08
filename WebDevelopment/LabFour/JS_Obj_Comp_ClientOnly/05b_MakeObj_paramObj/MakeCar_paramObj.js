"use strict"; // prevent browser from globally auto-declaring variables


//{ condition: "fair", price: 2500 };

function MakeCar_paramObj (paramObj) {

    //paramObj = { condition: "fair", price: 2500 };
    
    var condition = paramObj.condition || "unknown condition";
    var price = paramObj.price || 0;

    var carObj = document.createElement("div");
    
    // Style this object according to the CSS selectors that 
    // start with ".car" (all found in file "car.css").
    carObj.classList.add("car");
    
    // The above two lines of code create a div like this 
    // (that you could have typed directly using HTML):
    //     <div class="car"></div>

    carObj.innerHTML = "Car condition: " + condition + "<br/> price: " +
            formatCurrency(price);

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    return carObj;
}
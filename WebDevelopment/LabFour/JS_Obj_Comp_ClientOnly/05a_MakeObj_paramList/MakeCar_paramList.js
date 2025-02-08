"use strict"; // prevent browser from globally auto-declaring variables

// "great", 5000

function MakeCar_paramList (condition, price) {

    console.log ("the price is " + price);

    var carObj = document.createElement("div");

    // <div> </div>
    
    // Style this object according to the CSS selectors that 
    // start with ".car" (all found in file "car.css").
    carObj.classList.add ("car");
    
    // The above two lines of code create a div like this 
    // (that you could have typed directly using HTML):
    //     <div class="car"></div>

    carObj.innerHTML = "Car condition: " + condition + "<br/> Price: " +
            formatCurrency (price);

    /* now, it's like we've created this:
       <div class="car">
           Car condition: great <br/>
           Price: $5,000.00
       </div>
    */

    // private function, can only be used within MakeCar
    function formatCurrency (num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    return carObj;
}
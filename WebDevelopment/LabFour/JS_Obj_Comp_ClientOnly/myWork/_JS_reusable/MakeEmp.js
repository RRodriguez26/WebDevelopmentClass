function MakeEmp({
    empName='',
    empTitle='',
    empSalary=0,
    empProfile=null
}) {

    var empObj = document.createElement("div");

    empObj.classList.add("employee");

    // first use of “.title” creates custom (public) property of empObj
    empObj.title = empTitle;
    // salary is private property of empObj (because normal variable declaration in MakeCar
    var salary = empSalary;
    // title setter method (public) - could be used from outside MakeCar
    empObj.setTitle = function (newTitle) {
        empObj.title = newTitle;
        display(); // show updated property on the page
    };
    // public method to modify salary 
    empObj.changeSalary = function (changeSalary) {
        salary = Number(changeSalary);
        display(); // show updated salary on the page
    };

    // Build the UI with back tick, more similar to how you would create things coding with HTML.
    // Add a class to every DOM element that you want to style and/or access with JavaScript. 
    empObj.innerHTML = `
      <div class='empInfoClass'></div>
      <button class='titleButtonClass'>Change title to: </button>
      <input class='newInfoInputClass'/> <br/>
      <button class='salaryButtonClass'>Change Salary By Factor: </button>
      <input class='salaryFactorInputClass'/> 
    `;

    // Create variable references for all DOM elements (above) that we need to programatically access. 
    var empInfo = empObj.getElementsByClassName("empInfoClass")[0];
    var titleButton = empObj.getElementsByClassName("titleButtonClass")[0];
    var newTitleInput = empObj.getElementsByClassName("newInfoInputClass")[0];
    var salaryButton = empObj.getElementsByClassName("salaryButtonClass")[0];
    var salaryFactor = empObj.getElementsByClassName("salaryFactorInputClass")[0];

    // private method display, refreshes the Info div with current values for 
    // title and salary. 
    var display = function ( ) {
        empInfo.innerHTML = `<h3>${empName}</h3>
        ${empProfile === null ? `<p> No Image Available </P>` : `<img src="${empProfile}"/>`}
        <p>Title: ${empObj.title}<br/>
           Salary: ${formatCurrency(salary)}<br/>
        </p>`;
    };

    display(); // do this or the empInfo area will be blank initially

    titleButton.onclick = function () {
        empObj.setTitle(newTitleInput.value);
    };

    salaryButton.onclick = function () {
        empObj.changeSalary(salaryFactor.value);
    };

    function strToNum(str) {
        str += ""; // convert to string, if it's not a string.

        // remove formatting characters, if there are any
        str = str.replace("$", "");
        str = str.replace(",", "");

        var num = Number(str); // convert to number again.
        return num;
    }

    function formatCurrency(numStr) {

        var num = strToNum(numStr);

        var formattedNum = num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
        console.log("formattedNum:" + formattedNum);
        return formattedNum;
    }

    return empObj;
}
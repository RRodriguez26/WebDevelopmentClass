function MakeEmp_CGF() {

    var ele = document.createElement("div");

    var empOne = MakeEmp({empName: "Rafael", empTitle: "programmer", empSalary: 300, empProfile: "pics/funnyface.jpeg"});
    ele.appendChild(empOne);

    var empTwo = MakeEmp({});
    ele.appendChild(empTwo);

    return ele;
}
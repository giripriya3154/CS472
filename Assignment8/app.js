//Question 6

var count = (function () {
    let counter = 0;
    const increaseCounter = function () {
        ++counter;
    }
    const resetCounter = function () {
        counter = 0;
    }
    const valueCounter = function () {
        return counter;
    }

    return {
        add: increaseCounter,
        reset: resetCounter,
        currentvalue: valueCounter
    }
}
)();
count.add();
count.add();
count.add();
count.add();
console.log(count.currentvalue());
count.reset();
console.log(count.currentvalue());


//Question 7

/*    
In the defination of add() shown in question 6, the free variable in the context of function closure is counter

*/


//Question 8
var make_adder = function (inc) {
    let counter = 0;
    return function () {
        counter = counter + inc;
        return counter;
    }
};
add5 = make_adder(5);
add5();
add5();
add5();

console.log(add5());
add7 = make_adder(7);
add7();
add7();
console.log(add7());


//Question 9

/* 

We can use Module Pattern so that it remove all the  function and variable names from the global scope. module pattern simply 
wrap the set of variables and function together in single scope.

Example
(function() {
var count = 0;
function incr(n) {
count += n;
}
function reset() {
count = 0;
}
incr(4);
incr(2);
console.log("count: " + count);
})();
*/


//Question 10

const Employee = (function () {
    let name = "Priy";
    let age = 23;
    let salary = 2400;

    const getSalary = function () {
        return salary;
    }
    const getName = function () {
        return name;
    }
    const getAge = function () {
        return age;
    }
    const setSalary = function (newSalary) {
        salary = newSalary;
    }
    const setName = function (newName) {
        name = newName;
    }
    const setAge = function (newAge) {
        age = newAge;
    }
    const increaseSalary= function(percent){
     salary= getSalary()+ getSalary()*(percent/100);

    }
    const incrementAge= function(){
        age= getAge()+1;
   
       }

    return {
    
        setSalaryValue: setSalary,
        setNameValue: setName,
        setAgeVAlue:setAge,
        increaseSalaryValue:increaseSalary,
        increaseAgeValue:incrementAge,
        salary:getAge
    }


})();
Employee.setSalaryValue(500);
Employee.setAgeVAlue(35);
Employee.setNameValue("Pradip");
Employee.increaseSalaryValue(50);
Employee.increaseAgeValue();
Employee.increaseAgeValue();



//Question 11
const Employee1 = (function () {
    let name = "Priy";
    let age = 23;
    let salary = 2400;

    const getSalary = function () {
        return salary;
    }
    const getName = function () {
        return name;
    }
    const getAge = function () {
        return age;
    }
    const setSalary = function (newSalary) {
        salary = newSalary;
    }
    const setName = function (newName) {
        name = newName;
    }
    const setAge = function (newAge) {
        age = newAge;
    }
    const increaseSalary= function(percent){
     salary= getSalary()+ getSalary()*(percent/100);

    }
    const incrementAge= function(){
        age= getAge()+1;
   
       }

    return {
    
        setSalaryValue: setSalary,
        setNameValue: setName,
        setAgeVAlue:setAge,
        increaseSalaryValue:increaseSalary,
        increaseAgeValue:incrementAge,
        salary:getAge
    }


})();
Employee1.address="Fairfield";
 Employee1.setAddress=function(newAddress){
    address=newAddress;
}
Employee1.setAddress("Ramapur");
 Employee1.getAddress=function(){
    return Employee1.address;
}

console.log(Employee1);









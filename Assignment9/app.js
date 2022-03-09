//Question 1
let Person = {
    name: "",
    dateofBirth: " ",
    getName: function () {
        return this.name;
    },
    setName: function (newValue) {
        this.name = newValue;
    }
}
//Java Inheritance
let John2 = {
    __proto__: Person
}
John2.setName("John");
John2.dateofBirth = "1988-12-10"
console.log("The person's name is" + John2.getName());
console.log(John2.name + " was born on " + John2.dateofBirth)


//Object.create method
let John = Object.create(Person);
John.setName("John");
John.dateofBirth = "1988-12-10"
console.log("The person's name is" + John.getName());
console.log(John.name + " was born on " + John.dateofBirth)

// const topicName="ES Classes and ESModules";
// console.log(`welcome to ${topicName}`);





//Question 2

function Employee() {
    this.salary = " ";
    this.hireDate = todayDate(),
        this.doJob = function (jobTitle) {
            console.log(this.name+ " is a "+ jobTitle+ " who earns " +this.salary)
        }
}
let Anna=new Employee();
Anna.name="Anna";
Anna.salary="$249,995.50 ";
Anna.doJob("programmer");
function todayDate() {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    today = `${dd}/${mm}/${yyyy}`;
    return today;
}

//Object.create method
const Employee1={
   salary: " ",
    hireDate : todayDate(),
    doJob : function (jobTitle) {
            console.log(this.name+ " is a "+ jobTitle+ " who earns " +this.salary)
        }
}
let Anna1=Object.create(Employee1);
Anna1.name="Anna";
Anna1.salary="$249,995.50 ";
Anna.doJob("javaScriptProgrammer");









//Question 3
function Person1(){
    this.name="";
    this.dateofBirth=" ",
    this.toString=function(){
        return `{ Name: ${this.name} ,DateOfBirth: ${this.dateofBirth} }`;
    }
}
let peter=new Person1();
peter.name="John";
peter.dateofBirth="1998-12-10";
console.log(peter.toString());







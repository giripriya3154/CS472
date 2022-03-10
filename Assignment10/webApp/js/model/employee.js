import { Person } from "./person.js";

class Employee extends Person{
constructor(name,dateOfBirth,salary,hireDate){
    super(name,dateOfBirth);
    this._salary=salary;
    this._hireDate=hireDate;
}
doJob(jobTitle){
console.log(`${this.getName()} is a ${jobTitle} who earns ${this._salary}`);
}
}
export {Employee}
import { Person } from "./model/person.js";
import {Employee} from "./model/employee.js"
let persons= [new Person("Ana Smith","1998-12-15"),
new Person("Bob Jone","1945-11-16"),
new Person("Carlos Slim Helu", "1976-9-24")];

persons.forEach(person=>console.log(person.toString()));

 let employee=new Employee("Jim Hanson", "1996-8-13","$245.990.00","2022-1-1");
 employee.doJob("Softwre Engineer");


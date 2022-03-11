
class Patient{
    #patientId=null;
    #firstName=null;
    #middleName=null;
    #lastName=null;
    #dateOfBirth=null;
    #department=null;
    #isOut=null;
    constructor(patientId,firstName,middleName,lastName,daeOFBirth,department,isOut){
        this.#patientId=patientId;
        this.#firstName=firstName;
        this.#middleName=middleName;
        this.#lastName=lastName;
        this.#dateOfBirth=daeOFBirth;
        this.#department=department;
        this.#isOut=isOut;
    }
    getPatient(){
        return this.#patientId
    }
    getFirstName(){
        return this.#firstName
    }
    getMiddleName(){
        return this.#middleName
    }
    getLastName(){
        return this.#lastName
    }
    getDateOfBirth(){
        return this.#dateOfBirth
    }
    getDepartment(){
        return this.#department
    }
    getIsOut(){
        return this.#isOut
    }
    setPatientId(value){
        this.#patientId=value;
    }
    setFirstName(value){
        this.#firstName=value;
    }
    
    setMiddleName(value){
        this.#middleName=value;
    }
    
    setLastName(value){
        this.#lastName=value;
    }
    
    setDateOfBirth(value){
        this.#dateOfBirth=value;
    }
    
    setDepartment(value){
        this.#department=value;
    }
    
    setIsOut(value){
        this.#isOut=value;
    }
       
}
export {Patient};

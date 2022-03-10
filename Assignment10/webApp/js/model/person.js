class Person{
    constructor(name,dateOfBirth){
        this._name=name;
        
        this._dateOfBirth= new Date(dateOfBirth )
    }
    getName(){
        return this._name;
    }
    setName(name){
        this._name=name;
    }
    getDateOfBirth(){
        return `${this._dateOfBirth.getFullYear()}-${this._dateOfBirth.getMonth()+1}-${this._dateOfBirth.getDay()}`;
    }
    setDateOfBirth(dateOfBirth){
        this._dateOfBirth=dateOfBirth;
    }

    toString(){
       
        return `Name: ${this.getName()} , DateOfBirth: ${this.getDateOfBirth()}`;
    }
}
export {Person};
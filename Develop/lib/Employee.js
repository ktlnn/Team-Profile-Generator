
class Employee  {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getRole = () => "Employee";
    getName = () => this.name;
    getId = () => this.id;
    getEmail = () => this.email;
    
}

module.exports = Employee;
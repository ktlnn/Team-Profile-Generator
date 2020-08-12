// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

class Employee  {
    constructor(type, message, name){
        this.type = type;
        this.message = message;
        this.name = name;
    }

    validate(input){
        if(input.length < 1){
            return "Please complete input"
        } 
        else {
            return true;
        }
    }
}

const name = new Employee("input", "What is your full name?", "name");
console.log(name);

const id = new Employee("input", "What is your employee ID?", "id");
console.log(id);

const email = new Employee("input", "What is your email?", "email");
console.log(email);

inquirer.prompt([name, id, email])
.then(answers => {console.log(answers)});

module.exports = Employee;
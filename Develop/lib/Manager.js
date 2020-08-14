// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(type, message, name){
        super(type, message, name);
    }
    
}

const number = new Manager("input", "What is your office number?", "officeNumber");

inquirer.prompt([number])
.then(answers => {console.log(answers)});

module.exports = Manager;

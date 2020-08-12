// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee{
    // constructor(type, message, name){
    //     this.type = type;
    //     this.message = message;
    //     this.name = name;
    // }

    // validate(input){
    //     if(input.length < 1){
    //         return "Please complete input"
    //     } 
    //     else {
    //         return true;
    //     }
    // }
}

const github = new Engineer ("input", "What is your GitHub profile name?", "github");
console.log(github);

inquirer.prompt([github])
.then(answers => {console.log(answers)});

module.exports= Engineer;
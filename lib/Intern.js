// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee")

class Intern extends Employee {

}

const school = new Intern ("input", "What school are you attending?", "school");
console.log(school);

inquirer.prompt([school])
.then(answers => {console.log(answers)});
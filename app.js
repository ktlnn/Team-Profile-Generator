const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

const addManager = () => {
    return inquirer.prompt([
        { 
            type: "input",
            message: "What is your full name?",
            name: "name"
        },
        {
            type: "number",
            message: "What is your employee ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        {
            type: "number",
            message: "What is your office number?",
            name: "officeNumber"
        }
    ]).then(response => {
        console.log(response);
        // const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        // team.push(manager);
        // return generateTeam();
    })
}

const generateTeam = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Please select which type of team member you would like to add",
            name: "member",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
    ]).then(response => {
        switch(response.member){
            
            case "Manager":
                return addManager();

            case "Engineer":
                return addEngineer();

            case "Intern":
                return addIntern();

            default:
                return;
        }
    })
}

generateTeam();
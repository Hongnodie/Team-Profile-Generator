// npm package inclusion
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
// Local file inclusion
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Template helper code added
const RenderCard = require("./src/RenderCard");
// Output path using path package 
const outputdir = path.resolve(__dirname, "output"); // to be saved to a generated directory named as output
const outputPath = path.join(OUTPUT_DIR, "TeamDashboard.html"); // Will be named as TeamDashboard.html in that folder

const teamMember =[];

// Opening
console.log("Please specify your team by following the instructions:\nLet's get started!\n");

const questions = [
    {
        type: "rawlist",
        name: "role",
        message: "Please select the role/position first (Enter number to select)",
        choices: ["Manager", "Engineer", "Intern"],
    },
    {
        type: "input",
        message: "Please specify the name of the employee:",
        name: "name"
    },
    {
        type: 'number',
        message: 'Then asssign an integer as his/her ID',
        name: 'id'
    },
    {
        type: "input",
        name: "email",
        message: "What's the email address?",
        default: "abc@gmail.com"
    }
];

function rolequestion(role) {
    let rolequestions = [];

    switch(role) {
        case "Manager":
            rolequestions.push(
                {
                type: "input",
                message: "Please enter the office number of the manager:",
                name: "officeNumber"
                }
            )
            break;
        case "Engineer":
            rolequestions.push(
                {
                type: "input",
                message: "Please enter the username of github account",
                name: "githubname"
                }
            )
          break;
        case "Intern":
            rolequestions.push(
                {
                type: "input",
                message: "Please enter the name of school the employee is attending",
                name: "school"
                }
            )
            break;
    }
  
    return rolequestions;
  
}
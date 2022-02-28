// npm package inclusion
const fs = require("fs");
const inquirer = require("inquirer");
const { initial } = require("lodash");
const path = require("path");
// Local file inclusion
const Employee = require("./lib/Employee");
// Template helper code added
const render = require("./src/RenderCard");
// Output path using path package 
const outputdir = path.resolve(__dirname, "output"); // to be saved to a generated directory named as output
const outputPath = path.join(outputdir, "TeamDashboard.html"); // Will be named as TeamDashboard.html in that folder

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

const startApp = async () => {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to add an employee?",
            name: "addEmployee",
        }]
    )
    .then(() => {
        inquirer
        .prompt(questions)
        .then(async (answers) => {
            await inquirer
            .prompt(rolequestion(answers.role))
            .then((res) => {
                const newemployee = new Employee(answers.role, answers.name, answers.id, answers.email, res);
                teamMember.push(newemployee);
                console.log(`${answers.name} is added to the team`)
                startApp();
            })
        });
    })
    .then(() => {
        fs.writeFileSync(outputPath, render(teamMember), (err) => {        
            if (err) {
                return console.log(err);
            }}
        );
    })
    // .then(
    //     console.log("Profiles generated for your engineer team...\nPlease find in the directory named as 'output'")
    // )
};

// async function generateTeam() {
//     await startApp();
//     fs.writeFileSync(outputPath, render(teamMember), (err) => {        
//         if (err) {
//             return console.log(err);
//         }}
//     );
//     console.log("Profiles generated for your engineer team...\nPlease find in the directory named as 'output'")
// }

// function init() {
    startApp();
//     generateTeam();
// }

// init();
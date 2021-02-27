// Dependencies

const Manager = require("./backend/Manager");
const Engineer = require("./backend/Engineer");
const Intern = require("./backend/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Pointing my users input to populate the teams html file located in the output folder. 

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Passing in an array with the employees information to render to create the html blocks
const render = require("./backend/htmlgen");

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

var member = [];
var newMember;
const statments = [
    {type: "list", name: "memberTitle", message: "Which team member would you like to add?", choices: ["Manager", "Engineer", "Intern", "Done adding team members!"],},
    {type: "input", name: "memberName", message: "Employee's name:",
    when: (response) => response.memberTitle !== "Done adding team members!"},
    {type: "input", name: "memberId", message: "Employee's ID:",
    when: (response) => response.memberTitle !== "Done adding team members!"},
    {type: "input", name: "memberEmail", message: "Employee's E-mail address:",
    when: (response) => response.memberTitle !== "Done adding team members!"},
    {type: "input", name: "memberSchool", message: "Employee's school:",
    when: (response) => response.memberTitle === "Intern"},
    {type: "input", name: "memberGithub", message: "Employee's GitHub account:",
    when: (response) => response.memberTitle === "Engineer"},
    {type: "input", name: "memberOffice", message: "Employee's office Number:",
    when: (response) => response.memberTitle === "Manager"},
];

function addMember() {
    if (member.length === 0) {
        console.log("\n", "Start adding in your Team:", "\n");
    }
    inquirer.prompt(statments).then((response) => {
        console.log("\n");
        if (response.memberTitle !== "Done adding team members!") {
            switch (response.memberTitle) {
                case "Manager": 
                newMember = new Manager(
                    // According to the read me, Manager needs to have office number added.
                    response.memberName,
                    response.memberId,
                    response.memberEmail,
                    response.memberOffice,
                );
                member.push(newMember);
                break;
                case "Engineer":
                    newMember = new Engineer(
                        // Engineers special item is the git hub link (must be click-able)
                        response.memberName,
                        response.memberId,
                        response.memberEmail,
                        response.memberGithub,
                    );
                    member.push(newMember);
                    break;
                case "Intern":
                newMember = new Intern(
                    // Intern special item is school name
                    response.memberName,
                    response.memberId,
                    response.memberEmail,
                    response.memberSchool,
                );
                    member.push(newMember);
                    break;
                    default:
                        console.log("Data Entry Done Successfully!")
            }
            addMember();
        } else {
            fs.writeFile(outputPath, render(member), (error) => {
                if (error) { return console.log(error);
                }
            });
            console.log("\n", "All is successfully done! Thanks for using the Team Profile Generator!");
        }

    });
}
addMember();
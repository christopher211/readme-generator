// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter your title of project",
    name: "title",
  },
  {
    type: "input",
    message: "What is your project's description?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you setup your app?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use your app?",
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What license did you use for this repository?",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v2.0",
      "GNU General Public License v3.0",
      "Academic Free License v3.0",
      "MIT",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "How can people contribute to your project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How do people update the tests for your project?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message:
      "What is your email address where users and contributors can send questions?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("README.md created successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("README.md", generateMarkdown(response));
  });
}

// Function call to initialize app
init();

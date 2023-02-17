const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions',
      },
      {
        type: 'list',
        name: 'licence',
        message: 'Please what licence do you want to add?',
        choices: ['None', 'MIT', 'TV'],
      },

];

inquirer.prompt(questions);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

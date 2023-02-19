const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please enter the title of your project',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter any installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage information',
    },
    {
      type: 'rawlist',
      name: 'license',
      message: 'Please enter license type',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD-2-Clause License', 'BSD-3-Clause License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal']
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please enter contributing information',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter test instructions',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please enter GitHub username for questions section',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter email address for questions section',
    },
  ]);


// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
questions();
}

// function call to initialize program
init();
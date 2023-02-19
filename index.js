const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

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
      choices: [
        {
          name:'None',
          value: 0,
        },
        {
          name:'Apache License 2.0',
          value: 1,
        },
        {
          name:'GNU General Public License v3.0',
          value: 2,
        },
        {
          name:'MIT License',
          value: 3,
        },
        {
          name:'BSD-2-Clause License',
          value: 4,
        },
        {
          name:'BSD-3-Clause License',
          value: 5,
        },
        {
          name:'Boost Software License 1.0',
          value: 6,
        },
        {
          name:'Creative Commons Zero v1.0 Universal',
          value: 7,
        },
        ]
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
//function writeToFile(fileName, data) {

//}

// function to initialize program
function init() {
questions()
  .then((answers) => writeFileAsync('readme.md', generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to readme.md'))
  .catch((err) => console.error(err));
}

// function call to initialize program
init();
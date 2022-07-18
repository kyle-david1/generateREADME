const inquirer = require('inquirer');
const fs = require('fs')
const generateReadme = require('./generateReadme');

 

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project',
    },
    {
      type: 'input',
      name: 'tableOfContents',
      message: 'Write tables of contents using numbers',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'please list the directions for installation',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does one use your program?',
    },
    {
      type: 'checkbox',
      name: 'License',
      message: 'Which license did you use?',
      choices: ['None', 'MIT', 'The Unlicense'],
    },
    {
      type: 'input',
      name: 'Credits',
      message: 'List all collaborators.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Write any tests for this program',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter a link to your github ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter a link to your github ',
    },
  ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
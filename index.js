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
      name: 'license',
      message: 'Which license did you use?',
      choices: ['None', 'MIT', 'The Unlicense'],
    },
    {
      type: 'input',
      name: 'credits',
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
      message: 'Enter github username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'enter your email',
    },
  ]


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
 const init = () => {
  inquirer.prompt(questions)
  .then((answers) => fs.writeFileSync('generatedREADME.md', generateReadme(answers))), (err) =>
  err ? console.log(err) : console.log('success!')
 } 

   
init();
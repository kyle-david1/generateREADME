const inquirer = require('inquirer');
const fs = require('fs')
const generateReadme = require('./generateReadme');

 inquirer
// TODO: Create an array of questions for user input
.prompt([
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
    // {
    //   type: 'input',
    //   name: 'contents',
    //   message: 'Write tables of contents using numbers',
    // },
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
      message: 'Enter a link to your github ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter a link to your github ',
    },
  ])


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
  .then((answers) => {
    console.log(answers);
  
    fs.writeFile('README.md', (generateReadme(data)), (err) =>
      err ? console.log(err) : console.log('success!')
    );
  });
  
  function makeHTML(data){
    var userName = data.userName;
    var location = data.location;
    var bio = data.bio;
    var GitHub = data.GitHub;
    

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
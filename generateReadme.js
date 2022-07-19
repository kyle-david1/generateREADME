// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none'){
    return ""
  } else if (license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `[license](##-License)`
  } else {
    return '';
  }
}
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `license ${license}`
  } else {
    return ""
  }
}


// TODO: Create a function to generate markdown for README
function generateReadme(data) {
  return `## ${data.title}
  ${renderLicenseBadge(data.license)}
  
  
  ## Description
  ${data.description}
  
  
  
  ## Table of Contents
  -[Installation](#Usage)\n
  -[Usage](#Usage)\n
  -[Credits](#Credits)\n
  -[Tests](#Tests)\n
  -[Questions](#Questions)\n
  ${renderLicenseLink(data.license)}
  
  
  ## Installation
  ${data.installation}
  
  
  
  ## Usage
  ${data.usage}
  
  ## ${renderLicenseSection(data.license)}
  
  
  ## Credits
  ${data.credits}
  
  
  
  ## Tests
  ${data.tests}
  
  
  ## Questions 
  Github: [${data.github}](https://github.com/)\n
  Email: ${data.email}`;
}

module.exports = generateReadme;
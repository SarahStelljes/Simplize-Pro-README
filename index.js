// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: proNameInp => {
            if(proNameInp){
                return true;
            }
            else {
                console.log("Please enter the project's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'motive',
        message: 'A good README describes the projects What, Why, and How. Provide a sentance of what your motivation was to create the project.',
        validate: proMotive => {
            if(proMotive) {
                return true;
            } else {
                console.log('Explain your motive for the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'A good README describes the projects What, Why, and How. Provide a sentance of why you made this project.',
        validate: proWhy => {
            if(proWhy) {
                return true;
            } else {
                console.log('You must provide a sentance on why you made the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'problemSolved',
        message: 'Since this is a professional README, you need to explain what problem your project solved.',
        validate: proProblem => {
            if(proProblem) {
                return true;
            } else {
                console.log('You must explain what problem you solved with this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'learned',
        message: 'What did you learn by making this project?',
        validate: proLearned =>{
            if(proLearned) {
                return true;
            } else {
                console.log('You need to explain what you learned.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'What are the steps required to install your project?. Provide a step by step explanation.',
        validate: installInstruct => {
            if(installInstruct) {
                return true;
            } else {
                console.log("You need to provide instructions so other's will know how to install your project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide instructions and examples for use.",
        validate: proUsage => {
            if(proUsage) {
                return true;
            } else {
                console.log("You must provide instructions and examples for usage!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Please add contribution guidelines. Here is a link to industry standard guidelines: (https://www.contributor-covenant.org/)",
        validate: proContribute => {
            if(proContribute) {
                return true;
            } else {
                console.log("You need to add contribution guidelines!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: "Please write some test instructions.",
        validate: proTest => {
            if(proTest) {
                return true;
            } else {
                console.log("You must provide test instructions!");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: "Please choose a license for your project.",
        default: "None",
        choices: [
            "MIT License",
            "Apache 2.0 License",
            "Boost Software License 1.0",
            "BSD 3-Clause License",
            "BSD 2-Clause License",
            "Eclipse Public License",
            "GNU GPL v3",
            "GNU GPL v2",
            "GNU AGPL v3",
            "GNU LGPL v3",
            "GNU FDL v1.3",
            "The Hippocratic License 2.1",
            "The Hippocratic License 3.0",
            "IBM Public License Version 1.0",
            "ISC License (ISC)",
            "Mozilla Public License 2.0",
            "Attribute License (BY)",
            "Open Database License (ODbl)",
            "Public Domain Dedication and License (PPDL)",
            "The Perl License",
            "The Artistic License 2.0",
            "SIL Open Font License 1.1",
            "The Unlicense"
        ]
    },
    {
        type: "input",
        name: "githubUser",
        message: "Please enter your GitHub username.",
        validate: user => {
            if(user) {
                return true;
            } else {
                console.log("You must enter your GitHub username.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email so people will be able to contact you if they have questions.",
        validate: userEmail => {
            if(userEmail) {
                return true;
            } else {
                console.log("People will need to be able to contact you, so please enter your email address.");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "README.md was created!"
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
   .then(function(data) {
    writeToFile("./dist/README.md", generateMD(data));
   });
};

// Function call to initialize app
init()

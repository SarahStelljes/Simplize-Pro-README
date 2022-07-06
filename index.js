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
            {
                name: "MIT License",
                badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
                link: '(https://opensource.org/licenses/MIT)'
                
            },
            {
                name: "Apache 2.0 License",
                badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]',
                link: '(https://opensource.org/licenses/Apache-2.0)'
            },
            {
                name: "Boost Software License 1.0",
                badge: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]",
                link: '(https://www.boost.org/LICENSE_1_0.txt)'
            },
            {
                name: "BSD 3-Clause License",
                badge: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]",
                link: '(https://opensource.org/licenses/BSD-3-Clause)'
            },
            {
                name: "BSD 2-Clause License",
                badge: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]",
                link: '(https://opensource.org/licenses/BSD-2-Clause)'
            },
            {
                name: "Eclipse Public License",
                badge: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]",
                link: '(https://opensource.org/licenses/EPL-1.0)'
            },
            {
                name: "GNU GPL v3",
                badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
                link: '(https://www.gnu.org/licenses/gpl-3.0)'
            },
            {
                name: "GNU GPL v2",
                badge: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]",
                link: '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
            },
            {
                name: "GNU AGPL v3",
                badge: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]",
                link: '(https://www.gnu.org/licenses/agpl-3.0)'
            },
            {
                name: "GNU LGPL v3",
                badge: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]",
                link: '(https://www.gnu.org/licenses/lgpl-3.0)'
            },
            {
                name: "GNU FDL v1.3",
                badge: "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)]",
                link: '(https://www.gnu.org/licenses/fdl-1.3)'
            },
            {
                name: "The Hippocratic License 2.1",
                badge: "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)]",
                link: '(https://firstdonoharm.dev)'
            },
            {
                name: "The Hippocratic License 3.0",
                badge: "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)]",
                link: '(https://firstdonoharm.dev)'
            },
            {
                name: "IBM Public License Version 1.0",
                badge: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]",
                link: '(https://opensource.org/licenses/IPL-1.0)'
            },
            {
                name: "ISC License (ISC)",
                badge: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]",
                link: '(https://opensource.org/licenses/ISC)'
            },
            {
                name: "Mozilla Public License 2.0",
                badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]",
                link: "(https://opensource.org/licenses/MPL-2.0)"
            },
            {
                name: "Attribute License (BY)",
                badge: "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]",
                link: '(https://opendatacommons.org/licenses/by/)'
            },
            {
                name: "Open Database License (ODbl)",
                badge: "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)]",
                link: '(https://opendatacommons.org/licenses/odbl/)'
            },
            {
                name: "Public Domain Dedication and License (PPDL)",
                badge: "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]",
                link: '(https://opendatacommons.org/licenses/pddl/)'
            },
            {
                name: "The Perl License",
                badge: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]",
                link: '(https://opensource.org/licenses/Artistic-2.0)'
            },
            {
                name: "The Artistic License 2.0",
                badge: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)]",
                link: '(https://opensource.org/licenses/Artistic-2.0)'
            },
            {
                name: "SIL Open Font License 1.1",
                badge: "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]",
                link: '(https://opensource.org/licenses/OFL-1.1)'
            },
            {
                name: "The Unlicense",
                badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]",
                link: '(http://unlicense.org/)'
            }
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

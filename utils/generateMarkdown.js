const licenses = [
  {
      name: "MIT License",
      badge: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      link: '(https://opensource.org/licenses/MIT)'
      
  },
  {
      name: "Apache 2.0 License",
      badge: '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
      link: '(https://opensource.org/licenses/Apache-2.0)'
  },
  {
      name: "Boost Software License 1.0",
      badge: "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)",
      link: '(https://www.boost.org/LICENSE_1_0.txt)'
  },
  {
      name: "BSD 3-Clause License",
      badge: "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)",
      link: '(https://opensource.org/licenses/BSD-3-Clause)'
  },
  {
      name: "BSD 2-Clause License",
      badge: "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)",
      link: '(https://opensource.org/licenses/BSD-2-Clause)'
  },
  {
      name: "Eclipse Public License",
      badge: "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)",
      link: '(https://opensource.org/licenses/EPL-1.0)'
  },
  {
      name: "GNU GPL v3",
      badge: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
      link: '(https://www.gnu.org/licenses/gpl-3.0)'
  },
  {
      name: "GNU GPL v2",
      badge: "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)",
      link: '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  },
  {
      name: "GNU AGPL v3",
      badge: "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)",
      link: '(https://www.gnu.org/licenses/agpl-3.0)'
  },
  {
      name: "GNU LGPL v3",
      badge: "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)",
      link: '(https://www.gnu.org/licenses/lgpl-3.0)'
  },
  {
      name: "GNU FDL v1.3",
      badge: "![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)",
      link: '(https://www.gnu.org/licenses/fdl-1.3)'
  },
  {
      name: "The Hippocratic License 2.1",
      badge: "![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)",
      link: '(https://firstdonoharm.dev)'
  },
  {
      name: "The Hippocratic License 3.0",
      badge: "![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)",
      link: '(https://firstdonoharm.dev)'
  },
  {
      name: "IBM Public License Version 1.0",
      badge: "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)",
      link: '(https://opensource.org/licenses/IPL-1.0)'
  },
  {
      name: "ISC License (ISC)",
      badge: "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)",
      link: '(https://opensource.org/licenses/ISC)'
  },
  {
      name: "Mozilla Public License 2.0",
      badge: "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)",
      link: "(https://opensource.org/licenses/MPL-2.0)"
  },
  {
      name: "Attribute License (BY)",
      badge: "![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)",
      link: '(https://opendatacommons.org/licenses/by/)'
  },
  {
      name: "Open Database License (ODbl)",
      badge: "![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)",
      link: '(https://opendatacommons.org/licenses/odbl/)'
  },
  {
      name: "Public Domain Dedication and License (PPDL)",
      badge: "![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)",
      link: '(https://opendatacommons.org/licenses/pddl/)'
  },
  {
      name: "The Perl License",
      badge: "![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)",
      link: '(https://opensource.org/licenses/Artistic-2.0)'
  },
  {
      name: "The Artistic License 2.0",
      badge: "![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)",
      link: '(https://opensource.org/licenses/Artistic-2.0)'
  },
  {
      name: "SIL Open Font License 1.1",
      badge: "![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)",
      link: '(https://opensource.org/licenses/OFL-1.1)'
  },
  {
      name: "The Unlicense",
      badge: "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)",
      link: '(http://unlicense.org/)'
  }
]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    for(let i = 0; i < licenses.length; i++){
      if(license === licenses[i].name){
        return licenses[i].badge;
      }
    }
  } else {
    return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
    for(let i = 0; i < licenses.length; i++){
      if(license === licenses[i].name){
        return licenses[i].link;
      }
    }
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return `
    ## License
    ${renderLicenseBadge(license)}
    This project is protected under the ${license}. To learn more about this license, please click the following link: ${renderLicenseLink(license)}.

    ## Table of Contents
    [License](#license)
    `
  } else {
    return `
    ## Table of Contents
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.motive}. ${data.why}. ${data.problemSolved}. ${data.learned}.

  ${renderLicenseSection(data.license)}
  [Installation](#installation)
  [Usage](#usage)
  [Credits](#credits)
  [Tests](#tests)
  [Questions](#questions)


  ## Installation
  ${data.installInstructions}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  If you have any questions, please ask via email with the link below.
  ${data.email}
`;
}

module.exports = generateMarkdown;

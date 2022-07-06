// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ## Description
  ${data.motive}. ${data.why}. ${data.problemSolved}. ${data.learned}.

  ## Table of Contents
  [License](#license)
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

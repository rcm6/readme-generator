// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}  
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage

${data.usage}
## License
[![Licenseimage][image]][hyperlink]

${data.license == 0 ? `None`:''}
${data.license == 1 ? `[hyperlink]: https://opensource.org/licenses/Apache-2.0
[image]: https://img.shields.io/badge/License-Apache_2.0-blue.svg` :''}
${data.license == 2 ? `[hyperlink]: https://www.GNU.org/licenses/gpl-3.0
[image]: https://img.shields.io/badge/License-GPLv3-blue.svg` :''}
${data.license == 3 ? `[hyperlink]: https://opensource.org/licenses/MIT
[image]: https://img.shields.io/badge/License-MIT-yellow.svg` :''}
${data.license == 4 ? `[hyperlink]: https://opensource.org/licenses/BSD-2-Clause
[image]: https://img.shields.io/badge/License-BSD_2--Clause-orange.svg` :''}
${data.license == 5 ? `[hyperlink]: https://opensource.org/licenses/BSD-3-Clause
[image]: https://img.shields.io/badge/License-BSD_3--Clause-blue.svg` :''}
${data.license == 6 ? `[hyperlink]: https://www.boost.org/LICENSE_1_0.txt
[image]: https://img.shields.io/badge/License-Boost_1.0-lightblue.svg` :''}
${data.license == 7 ? `[hyperlink]: http://Creativecommons.org/publicdomain/zero/1.0/
[image]: https://licensebuttons.net/l/zero/1.0/80x15.png` :''}

## Contributing

${data.contribution}  
## Tests

${data.tests}  
  
## Questions

Github: [https://github.com/${data.github}](https://github.com/${data.github})  
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
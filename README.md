# 10 Object-Oriented Programming: Team Profile Generator
## Contact information:
Tori Sanford
Tori.danielle.clark91@gmail.com
Link to repo: https://github.com/TSanfordGATech?tab=repositories
link to video walk through: https://drive.google.com/file/d/1uiOc2sANgZGQnbUkPQKFi9lD-wU_Oqm9/view?usp=sharing

![Screen Shot of final product](./Assets/teampro.png)

## Install
Node, inquirer, and Jest

## Usage Rights
Before starting, run NPM Install in the terminal for index.js. Once that is completed, run node index.js in the terminal. Questions will then populate for the user to answer. Answer each one to the best of your ability. Once done, the html me file will populate. The console log will tell the user if there are any errors or if the document successfully generated. To kick off the tests, install the jest first and then npm run test.

## The assignment

Your task is to build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so you’ll also write a unit test for every part of your code and ensure that it passes each test.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and all of the tests passing. You’ll need to submit a link to the video AND add it to the readme of your project.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Mock-Up

The following image shows a mock-up of the generated HTML’s appearance and functionality:

![HTML webpage titled “My Team” features five boxes listing employee names, titles, and other key info.](./Assets/10-object-oriented-programming-homework-demo.png)

The styling in the image is just an example, so feel free to add your own.

## Getting Started

This homework will combine many of the skills we've covered so far. In addition to the User Story and Acceptance Criteria, we’ve provided some guidelines to help get started.

Your application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user. The application will be invoked by using the following command:

```bash
node index.js
```

It is recommended that you start with a directory structure that looks like the following example:

```md
__tests__/			// jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/               // rendered output (HTML) and CSS style sheet
lib/				// classes
src/				// template helper code
index.js			// runs the application
```

The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

The first class is an `Employee` parent class with the following properties and methods:

* `name`

* `id`

* `email`

* `getName()`

* `getId()`

* `getEmail()`

* `getRole()`&mdash;returns `'Employee'`

The other three classes will extend `Employee`.

In addition to `Employee`'s properties and methods, `Manager` will also have the following:

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`

In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

* `github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`

In addition to `Employee`'s properties and methods, `Intern` will also have the following:

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`

Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

## Grading Requirements

This homework is graded based on the following criteria: 

### Deliverables: 15%

* A sample HTML file generated using the application must be submitted. (Success)

* Your GitHub repository containing your application code.
(Success)

### Walkthrough Video: 32%

* A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.
(Success)

* The walkthrough video must show all four tests passing from the command line.
(Success)

* The walkthrough video must demonstrate how a user would invoke the application from the command line. (Success)

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application. (Success)

* The walkthrough video must demonstrate a generated HTML file that matches the user input. (Success)


### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

	* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer). (Success)

	* Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests. (Success)

  * The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes. (Success)

### Repository Quality: 13%

* Repository has a unique name. (Success)

* Repository follows best practices for file structure and naming conventions. (Success)

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc. (Success)

* Repository contains multiple descriptive commit messages. (Success)

* Repository contains a high-quality readme with description and a link to a walkthrough video. (Success)

## Review

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application and passing tests. (Success)

* A sample HTML file generated using your application. (Success)

* The URL of the GitHub repository, with a unique name and a readme describing the project. (Success)

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

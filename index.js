const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//Team classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const generateFiles = require('./src/generateFiles');
const errorMsg = 'Invalid response. Please try again.';
const infoArray = [];

//Inquirer question prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log (errorMsg);
                    return false; 
            }
        }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID.",
            validate: nameInput => {
                if (nameInput.length < 1) {
                    console.log (errorMsg)
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email.",
            validate: email => { 
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    return true;
                } else {
                    console.log (errorMsg)
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number",
            validate: nameInput => {
                if (nameInput.length < 1) {
                    console.log (errorMsg)
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const {name, id, email, officeNumber} = managerInput; 
        const manager = new Manager(name, id, email, officeNumber);
        infoArray.push(manager); 
        
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log("Adding employees to the team...");

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose the employee's role:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the name of the employee", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log (errorMsg);
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID",
            validate: nameInput => {
                if  (nameInput.length < 1) {
                    console.log (errorMsg)
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email.",
            validate: email => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    return true;
                } else {
                    console.log (errorMsg)
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's Github username.",
            when: (input) => input.role == "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log (errorMsg)
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school",
            when: (input) => input.role == "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log (errorMsg)
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        infoArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(infoArray); 
        } else {
            return infoArray;
        }
    })

};

//fs
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => { 
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("File dist/index.html successfully created")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(infoArray => {
    return generateFiles(infoArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
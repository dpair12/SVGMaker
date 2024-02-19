//Import inquirer module
const inquirer = require('inquirer');
//Import promises for writeFile method
const { writeFile } = require('fs').promises;
//Import Classes 
const { Shapes, Triangle, Square, Circle } = require('./lib/shapes.js');

//Array of Questions (Statements) that Inquirer Module Will Pull from to Capture User Input
const quest = [
    'Please Enter Text for Your SVG.',
    'Please Select Your Text Color.',
    'Please Choose One of The Following Options as Your Shape:',
    'Please Select Your Shape Color'
];

//Function that Displays Prompt of Questions in Sequential Order to User
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: quest[0],
        },
        {
            type: 'input',
            name: 'textcolor',
            message: quest[1],
        },
        {
            type: 'list',
            name: 'shape',
            message: quest[2],
            choices: ['Triangle', 'Circle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: quest[3],
        }
    ]);
}

//Function that initializes the application
function init() {
//Initializing promptUser Function
    promptUser()
    //Takes the data and does a few tasks with it
        .then((data) => {
            //Create a new Shapes structure by passing in data from inquirer module to serve as svgContent
            const svgContent = new Shapes(data);
            //If User Selects Triangle Then created a new Triangle by using svgContent and then write a file with that content and render it 
            if (data.shape === 'Triangle') {
                const triangle = new Triangle(svgContent);
                return writeFile('./dist/logo.svg', triangle.render());
            }
            //If User Selects Circle Then created a new Circle by using svgContent and then write a file with that content and render it 
            if (data.shape === 'Circle') {
                const circle = new Circle(svgContent);
                return writeFile('./dist/logo.svg', circle.render());
            }
            //If User Selects Square Then created a new Square by using svgContent and then write a file with that content and render it 
            if (data.shape === 'Square') {
                const square = new Square(svgContent);
                return writeFile('./dist/logo.svg', square.render());
            }
        })
        //After doing the above, log message to terminal saying that logo.svg file was successfully created
        .then(() => console.log(`Successfully generated logo.svg`))
        //Look out for any errors and if one is found then catch it, display it in the terminal, and also state in a separate message that logo.svg was unable to be generated
        .catch((err) => {
            console.log(err);
            console.log('Unable to generate logo.svg');
        });
}

//Actitivates function that initializes the entire application
init();
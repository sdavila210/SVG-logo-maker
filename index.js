// importing packages needed for the application
const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./lib/Circle.js');
const Triangle = require('./lib/Triangle.js');
const Square = require('./lib/Square.js');

// function to generate logo using inquirer. It is an array of questions to ask the user
function generateLogo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Please enter up to 3 characters.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter text color.',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose a shape from the following list:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter shape color',
        }
    ])
        //creates an instance of the shape class chosen by the user and assigns to shape variable using a switch statement in the promise
        .then((userInput) => {
            let shape;
            switch (userInput.shape) {
                case 'circle': shape = new Circle();
                    break;
                case 'triangle': shape = new Triangle();
                    break;
                case 'square': shape = new Square();
                    break;
            }

            //creates the content for the SVG from selected user input and shape rendering
            const svgContent = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
            ${shape.render(userInput.shapeColor)}
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${userInput.textColor}" font-size="50">${userInput.text}</text>
            </svg>`;

            //takes the content and creates a logo.svg file
            const fileName = 'logo.svg';
            fs.writeFileSync(fileName, svgContent);
            console.log('Generated logo.svg');
        })
        //catches any error and displays error message is there is an error
        .catch((error) => {
            console.error('There was an error', error);
        });
}

generateLogo();


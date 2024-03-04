//importing shape class from shapes.js
const Shape = require('./shapes');

//circle class inherits from shape class. Using constructor function to create new instance of circle, passing passing circle as argument for the type property of shape class.
class Circle extends Shape {
    constructor() {
        super('circle');
    }

    //creates the circle shape and color
    render(shapeColor) {
        return `<circle cx="150" cy="100" r="100" fill="${shapeColor}"/>`;
    }
}

module.exports = Circle;
//importing shape class from shapes.js
const Shape = require('./shapes');

//square class inherits from shape class. Using constructor function to create new instance of square, passing passing square as argument for the type property of shape class.
class Square extends Shape {
    constructor() {
        super('square');
    }

    //creates the square shape and color
    render(shapeColor) {
        return `<rect width="150" height="150" x="75" y="25" fill="${shapeColor}"/>`;
    }
}

module.exports = Square;
//importing shape class from shapes.js
const Shape = require('./shapes');

//triangle class inherits from shape class. Using constructor function to create new instance of triangle, passing passing triangle as argument for the type property of shape class.
class Triangle extends Shape {
    constructor() {
        super('triangle');
    }

    //creates the triangle shape and color
    render(shapeColor) {
        return `<polygon points="150 50, 225 150, 80 150" fill="${shapeColor}"/>`;
    }
}

module.exports = Triangle;
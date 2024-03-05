//importing shapes from respective files
const Circle = require('./Circle');
const Triangle = require('./Triangle');
const Square = require('./Square');

//testing the render method for each shape by creating an instance of that shapes class and expecting the render method to generate the shape correctly
describe('Circle Class', () => {
    it('renders circle correctly', () => {
        const shape = new Circle();
        expect(shape.render('red')).toEqual('<circle cx="150" cy="100" r="100" fill="red"/>');
    });
});

describe('Triangle Class', () => {
    it('renders triangle correctly', () => {
        const shape = new Triangle();
        expect(shape.render('blue')).toEqual('<polygon points="150 50, 225 150, 80 150" fill="blue"/>');
    });
});

describe('Square Class', () => {
    it('renders square correctly', () => {
        const shape = new Square();
        expect(shape.render('green')).toEqual('<rect width="150" height="150" x="75" y="25" fill="green"/>');
    });
});
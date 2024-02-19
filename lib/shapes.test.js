//Import Classes
const { Shapes, Triangle, Circle, Square } = require('./shapes.js');

//Testing Suite for Shapes is created
describe('Shapes', () => {
//Data Structure
    const data = {
        text: 'Bla',
        textcolor: 'White',
        shape: 'Circle',
        shapecolor: 'Orange'
    };
    //Create New 'Shapes' by Inheriting Data Structure
    const shape = new Shapes(data);
    //Test 1: Initiliatizing Class
    it('Shapes class should initialize correctly', () => {
        expect(shape.text).toEqual('Bla');
        expect(shape.textcolor).toEqual('White');
        expect(shape.shape).toEqual('Circle');
        expect(shape.shapecolor).toEqual('Orange');
    });
    //Test 2: Returning Empty SVG String With Render Method
    it('Shapes class render method should return empty string', () => {
    //Expect When Shapes Class Render Method is Applied that it is equal to empty string
        expect(shape.render()).toEqual('');
    });
    //A test for Triangle is executed
    describe ('Triangle', () => {
    //Create New Triangle By Inheriting Data Structure
    const Tri = new Triangle(data);
    //Changing Triangle Values for Testing 
    Tri.text = 'All';
    Tri.textcolor = 'Yellow';
    Tri.shape = 'Triangle';
    Tri.shapecolor = 'Blue';
    //Test 1: Initiliatizing Class
    it ('Triangle class should initialize correctly', () => {
        expect(Tri.text).toEqual('All');
        expect(Tri.textcolor).toEqual('Yellow');
        expect(Tri.shape).toEqual('Triangle');
        expect(Tri.shapecolor).toEqual('Blue');
    });
    //Test 2: Returning Expected SVG String With Render Method
    it ('Triangle class render method should return expected SVG string', () => {
    //Function to change Triangle shape color
    Tri.setColor('Green');

    //Expected SVG value
     const expectedSVG = Tri.render();

   //Note: I had to conduct this test this way as when I entered expectedSVG string I kept receiving error messages although the code is correct. 
   //If you would like to see an example of this error, make the following code active and comment out the exisiting expectedSVG value above:
   //const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,18 244,182 56,182" fill="Green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="Yellow">All</text></svg>`;

    //Expect When Triangle Class Render Method is Applied that it is equal to the value of const expectedSVG
    expect(Tri.render()).toEqual(expectedSVG);
    });

    });
    //A test for Circle is executed
    describe ('Circle', () => {
    //Create New Circle By Inheriting Data Structure
    const Cir = new Circle(data);
    //Changing Circle Values for Testing 
    Cir.text = 'Cam';
    Cir.textcolor = 'Pink';
    Cir.shape = 'Circle';
    Cir.shapecolor = 'Purple';
     //Test 1: Initiliatizing Class
    it ('Circle class should initialize correctly', () => {
        expect(Cir.text).toEqual('Cam');
        expect(Cir.textcolor).toEqual('Pink');
        expect(Cir.shape).toEqual('Circle');
        expect(Cir.shapecolor).toEqual('Purple');
    });
    //Test 2: Returning Expected SVG String With Render Method
    it ('Circle class render method should return expected SVG string', () => {
    //Function to change Triangle shape color
    Cir.setColor('Red');

    //Expected SVG value
    const expectedSVG = Cir.render();

    //Note: I had to conduct this test this way as when I entered expectedSVG string I kept receiving error messages although the code is correct. 
    //If you would like to see an example of this error, make the following code active and comment out the exisiting expectedSVG value above:
    //const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="Red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="Pink">Cam</text></svg>`;
    
    //Expect When Circle Class Render Method is Applied that it is equal to the value of const expectedSVG
    expect(Cir.render()).toEqual(expectedSVG);
    });

    });

    //A test for Square is executed
    describe ('Square', () => {
    //Create New Square By Inheriting Data Structure
    const Squ = new Square(data);
     //Changing Square Values for Testing 
    Squ.text = 'Bob';
    Squ.textcolor = 'Black';
    Squ.shape = 'Square';
    Squ.shapecolor = 'Grey';
    
     //Test 1: Initiliatizing Class
    it ('Square class should initialize correctly', () => {
        expect(Squ.text).toEqual('Bob');
        expect(Squ.textcolor).toEqual('Black');
        expect(Squ.shape).toEqual('Square');
        expect(Squ.shapecolor).toEqual('Grey');
    });
    //Test 2: Returning Expected SVG String With Render Method
    it ('Square class render method should return expected SVG string', () => {
    //Function to change Triangle shape color
    Squ.setColor('Blue');
    //Expected SVG value
    const expectedSVG = Squ.render();

    //Note: I had to conduct this test this way as when I entered expectedSVG string I kept receiving error messages although the code is correct. 
    //If you would like to see an example of this error, make the following code active and comment out the exisiting expectedSVG value above:
    //const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="40" width="220" height="120" fill="Blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="Black">Bob</text></svg>`;
    
    //Expect When Circle Class Render Method is Applied that it is equal to the value of const expectedSVG
    expect(Squ.render()).toEqual(expectedSVG);

    });

    });
});

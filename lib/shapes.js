//Shapes Constructor Class
class Shapes {
    //Creating Structure by Passing in Data Values from Inquirer Module
    constructor(data) {
        this.text = data.text;
        this.textcolor = data.textcolor;
        this.shape = data.shape;
        this.shapecolor = data.shapecolor;
    }

    render() {
        // Default render method for Shapes class
        return '';
    }
}

//Create Triangle Class that Inherits Structure of Shapes Class
class Triangle extends Shapes {
    //Function that allows you to change shape color 
    setColor(color) {
        this.shapecolor = color;
    }
    //Render SVG String after Data Values are Obtained
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,18 244,182 56,182" fill="${this.shapecolor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>`;
    }
}

//Create Circle Class that Inherits Structure of Shapes Class
class Circle extends Shapes {
    //Function that allows you to change shape color 
    setColor(color) {
        this.shapecolor = color;
    }
    //Render SVG String after Data Values are Obtained
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapecolor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>`;
    }
}

//Create Square Class that Inherits Structure of Shapes Class
class Square extends Shapes {
    //Function that allows you to change shape color
    setColor(color) {
        this.shapecolor = color;
    }

    //Render SVG String after Data Values are Obtained
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="40" width="220" height="120" fill="${this.shapecolor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textcolor}">${this.text}</text>
        </svg>`;
    }
}

//Export Classes to Be Used In Other Areas of Application
module.exports = { Shapes, Triangle, Circle, Square };
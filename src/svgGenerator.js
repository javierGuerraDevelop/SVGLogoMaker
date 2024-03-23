import fs from 'fs';
import { Circle, Square, Triangle } from './shape.js';

class SVGGenerator {
    constructor(shapeType, shapeColor, text, textColor) {
        this.shapeType = shapeType;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }

    generateSVG() {
        let shape;

        switch (this.shapeType.toLowerCase()) {
            case 'circle':
                shape = new Circle(this.shapeColor);
                break;
            case 'square':
                shape = new Square(this.shapeColor);
                break;
            case 'triangle':
                shape = new Triangle(this.shapeColor);
                break;
            default:
                throw new Error('Invalid shape type');
        }

        const svgContent = shape.generateSVG(this.text, this.textColor);
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    }
}

export default SVGGenerator;

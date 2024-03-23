class Shape {
    constructor(color) {
        this.color = color;
    }

    generateSVG() {
        return '';
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    generateSVG(text, textColor) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.color}" />
      <text x="150" y="105" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    generateSVG(text, textColor) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="200" height="100" fill="${this.color}" />
      <text x="150" y="105" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    generateSVG(text, textColor) {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,50 250,150 50,150" fill="${this.color}"/>
      <text x="150" y="105" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
    }
}

export { Circle, Square, Triangle };

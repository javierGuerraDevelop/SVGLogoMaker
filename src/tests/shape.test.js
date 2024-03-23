const { Circle, Square, Triangle } = require('../shape');

describe('Shape classes generate correct SVG', () => {
    test('Circle generates correct SVG', () => {
        const circle = new Circle('red');
        const svg = circle.generateSVG('TXT', 'white');
        expect(svg).toContain('<circle');
        expect(svg).toContain('fill="red"');
        expect(svg).toContain('>TXT</text>');
    });

    test('Square generates correct SVG', () => {
        const square = new Square('green');
        const svg = square.generateSVG('TXT', 'black');
        expect(svg).toContain('<rect');
        expect(svg).toContain('fill="green"');
        expect(svg).toContain('>TXT</text>');
    });

    test('Triangle generates correct SVG', () => {
        const triangle = new Triangle('blue');
        const svg = triangle.generateSVG('TXT', 'yellow');
        expect(svg).toContain('<polygon');
        expect(svg).toContain('fill="blue"');
        expect(svg).toContain('>TXT</text>');
    });
});

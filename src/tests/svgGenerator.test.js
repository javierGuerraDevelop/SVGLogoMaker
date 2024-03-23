jest.mock('fs');

const SVGGenerator = require('../svgGenerator');
const fs = require('fs');
fs.writeFileSync = jest.fn();

describe('SVGGenerator functionality', () => {
    beforeEach(() => {
        fs.writeFileSync.mockClear();
    });

    test('Generates SVG for Circle', () => {
        const svgGen = new SVGGenerator('circle', 'red', 'C', 'white');
        svgGen.generateSVG();
        const writtenContent = fs.writeFileSync.mock.calls[0][1];
        expect(writtenContent).toContain('<circle');
        expect(writtenContent).toContain('fill="red"');
        expect(writtenContent).toContain('>C</text>');
    });

    test('Generates SVG for Square', () => {
        const svgGen = new SVGGenerator('square', 'green', 'S', 'black');
        svgGen.generateSVG();
        const writtenContent = fs.writeFileSync.mock.calls[0][1];
        expect(writtenContent).toContain('<rect');
        expect(writtenContent).toContain('fill="green"');
        expect(writtenContent).toContain('>S</text>');
    });

    test('Generates SVG for Triangle', () => {
        const svgGen = new SVGGenerator('triangle', 'blue', 'T', 'yellow');
        svgGen.generateSVG();
        const writtenContent = fs.writeFileSync.mock.calls[0][1];
        expect(writtenContent).toContain('<polygon');
        expect(writtenContent).toContain('fill="blue"');
        expect(writtenContent).toContain('>T</text>');
    });
});

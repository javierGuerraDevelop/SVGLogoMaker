import inquirer from 'inquirer';
import SVGGenerator from './svgGenerator.js';

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want in your logo? (up to 3 characters)',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want for your text?',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color do you want for your shape?',
    },
];

inquirer.prompt(questions).then((answers) => {
    const svgGenerator = new SVGGenerator(answers.shape, answers.shapeColor, answers.text, answers.textColor);
    svgGenerator.generateSVG();
});

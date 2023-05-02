const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter the 3 letters you would like for your logo.",
      name: "company",
    },
    {
      type: "input",
      message:
        "What color would you like your design text to be? (hexadecimal accepted)",
      name: "textColor",
    },
    {
      type: "list",
      message: "What shape would you like your logo to be?",
      name: "shape",
      choices: ["Square", "Triangle", "Circle"],
    },
    {
      type: "input",
      message:
        "What color would you like your shape to be? (hexadecimal accepted)",
      name: "shapeColor",
    },
  ])
  .then((answers) => {
    let svgImage = renderShape(
      answers.company,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );
    fs.writeFileSync("logo.svg", svgImage);

    console.log(answers);
  });

const renderShape = (text, textColor, shape, shapeColor) => {
  switch (shape) {
    case "Circle":
      svgImage = `<svg version="1.1" height="200" width="300">
      <circle cx="150" cy="100" r="100" fill="${shapeColor}" />
      <text x="150" y="50%" dominant-baseline="middle" font-size="80" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
      return svgImage;
    case "Square":
      svgImage = `<svg version="1.1" height="300" width="200">
      <rect x="0" y="50" width="300" height="200" fill="${shapeColor}" />
      <text x="50%" y="50%" dominant-baseline="middle" font-size="80" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
      return svgImage;
    case "Triangle":
      svgImage = `<svg version="1.1" height="300" width="200">
      <polygon points="50 15, 100 100, 0 100" fill="${shapeColor}" />
      <text x="50" y="85" dominant-baseline="middle" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
      return svgImage;
  }
};

module.exports = renderShape;

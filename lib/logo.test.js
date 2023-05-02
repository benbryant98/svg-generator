const renderShape = require("../index.js");

describe("Logo", () => {
  describe("renderShapeSquare", () => {
    it("should take inputs from inquirer to make a blue square with white text svg", () => {
      const squareSVG = `<svg version="1.1" height="300" width="200">
      <rect x="0" y="50" width="300" height="200" fill="blue" />
      <text x="50%" y="50%" dominant-baseline="middle" font-size="80" text-anchor="middle" fill="white">TST</text>
      </svg>`;
      const newSquare = renderShape("TST", "white", "Square", "blue");
      expect(newSquare).toEqual(squareSVG);
    });
  });

  describe("renderShapeCircle", () => {
    it("should take inputs to make a blue circle with white text", () => {
      const circleSVG = `<svg version="1.1" height="200" width="300">
      <circle cx="150" cy="100" r="100" fill="blue" />
      <text x="150" y="50%" dominant-baseline="middle" font-size="80" text-anchor="middle" fill="white">TST</text>
      </svg>`;
      const newCircle = renderShape("TST", "white", "Circle", "blue");
      expect(newCircle).toEqual(circleSVG);
    });
  });

  describe("renderShapeTriangle", () => {
    it("should take inputs to make a blue triangle with white text", () => {
      const triangleSVG = `<svg version="1.1" height="300" width="200">
      <polygon points="50 15, 100 100, 0 100" fill="blue" />
      <text x="50" y="85" dominant-baseline="middle" font-size="40" text-anchor="middle" fill="white">TST</text>
      </svg>`;
      const newTriangle = renderShape("TST", "white", "Triangle", "blue");
      expect(newTriangle).toEqual(triangleSVG);
    });
  });
});

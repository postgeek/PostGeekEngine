import Shape from '../Shape';

class PathObject extends Shape {
  constructor() {
    super();
    this.pathSteps = [];
  }

  getSteps() {
    return this.pathSteps;
  }

  addStep(callback) {
    this.pathSteps.push(callback);
  }

  internalDraw() {
    this.pathSteps.forEach((pathStep) => {
      pathStep();
    });
  }
} export default PathObject;

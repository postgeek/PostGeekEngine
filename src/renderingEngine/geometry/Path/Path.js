import Shape from '../Shape';

class Path extends Shape {

    constructor() {
        super();
        this.pathSteps = [];
    }

    addStep(callback) {
        this.pathSteps.push(callback);
    }

    internalDraw() {
        this.pathSteps.forEach(function(pathStep) {
            pathStep();
        });
    }

} export default Path;
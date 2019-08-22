/* Disable the eslint rules for the mock class.
 * We don't want to test the function just make sure it's envoked */
/* eslint class-methods-use-this: 0 */
/* eslint no-useless-constructor: 0 */
/* eslint no-empty-function: 0 */
/* eslint no-unused-vars: 0 */

import GradientMock from './GradientMock';

/**
 * Mock class for the CanvasRenderingContext2D
 */
class ContextMock {
  constructor() {

  }

  createGradientMock() {
    this.gradientMock = new GradientMock();
    return this.gradientMock;
  }

  createLinearGradient(startPoint, endPoint) {
    return this.gradientMock;
  }

  createRadialGradient(startCircle, endCircle) {
    return this.gradientMock;
  }

  moveTo(x, y) {

  }

  arc(x, y, radius, angleDirection, circumference) {

  }

  bezierCurveTo(x1, y1, x2, y2, x3, y3) {

  }

  beginPath() {

  }

  closePath() {

  }

  ellipse(x, y, radiusX, radiusY, rotation, angleDirection, circumference) {

  }

  fill() {

  }

  quadraticCurveTo(x1, y1, x2, y2) {

  }

  rect(x, y, width, height) {

  }

  restore() {

  }

  resetTransform() {

  }

  rotate(angle) {

  }

  save() {

  }

  scale(x, y) {

  }

  skew(x, y) {

  }

  stroke() {

  }

  translate(x, y) {

  }
} export default ContextMock;

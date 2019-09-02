/* eslint class-methods-use-this: 0 */
/* eslint no-useless-constructor: 0 */
/* eslint no-empty-function: 0 */
/* eslint no-unused-vars: 0 */

import Gradient from '../../src/renderingEngine/colors/gradient/Gradient';

class GradientMock extends Gradient {
  constructor() {
    super();
  }

  addColorStop(offset, color) {

  }
} export default GradientMock;

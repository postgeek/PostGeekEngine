import MethodNotImplementedError from '../../core/errorHandling/errors/MethodNotImplementedError';

import HUDComponent from '../HUDComponent';
import ServiceLocator from '../../core/ServiceLocator';

class ClickableComponent extends HUDComponent {
  constructor(point) {
    super(point);
  }

  isMouseColliding(event) {
    const mouseX = event.x;
    const mouseY = event.y;
    const inputX = this.point.x;
    const inputY = this.point.y;
    const inputWidth = this.width;
    const inputHeight = this.height;

    const maxX = inputWidth + inputX;
    const maxY = inputHeight + inputY;
    const minX = inputX;
    const minY = inputY;

    // Check for collision with the mouse
    return (minX <= mouseX && mouseX <= maxX && minY <= mouseY && mouseY <= maxY);
  }
} export default ClickableComponent;

import Point from '../../../core/Point';
import ClickableComponent from '../ClickableComponent';
import Rectangle from '../../../renderingEngine/geometry/Rectangle';
import Circle from '../../../renderingEngine/geometry/Circle';
import GeometryStyle from '../../../renderingEngine/geometry/GeometryStyle';
import Color from '../../../renderingEngine/colors/Color';

class ColorSlider extends ClickableComponent {
  constructor(point, width, height, initialXPosition, geometryStyle) {
    super(point);
    this.width = width;
    this.height = height;
    this.sliderPositionX = initialXPosition;

    const rectangleSelectorGeometryStyle = new GeometryStyle({
      fillStyle: Color.BLACK,
      lineWidth: 1,
    });
    this.rectangleSelector = new Rectangle(new Point(this.point.x + initialXPosition, this.point.y), 1, 30);
    this.rectangleSelector.geometryStyle = rectangleSelectorGeometryStyle;

    const circleSelectorGeometryStyle = new GeometryStyle({
      strokeStyle: Color.BLACK,
      lineWidth: 2,
    });
    this.circleSelector = new Circle(new Point(this.point.x, this.point.y + 15), 8);
    this.circleSelector.geometryStyle = circleSelectorGeometryStyle;

    this.rectangle = new Rectangle(this.point, width, height);
    this.geometryStyle = geometryStyle;
  }

  set sliderPositionX(value) {
    this._sliderPositionX = value;
  }

  get sliderPositionX() {
    return this._sliderPositionX;
  }

  set geometryStyle(value) {
    this._geometryStyle = value;
    this.rectangle.geometryStyle = this.geometryStyle;
  }

  get geometryStyle() {
    return this._geometryStyle;
  }

  update(event) {
    if (this.isMouseColliding(event)) {
      const { x } = event;
      this.sliderPositionX = x - this.point.x;
      this.rectangleSelector.point.x = this.point.x + this.sliderPositionX;
      this.circleSelector.point.x = this.point.x + this.sliderPositionX;
    }
  }

  draw() {
    this.rectangle.draw();
    this.rectangleSelector.draw();
    // this.circleSelector.draw();
  }
} export default ColorSlider;

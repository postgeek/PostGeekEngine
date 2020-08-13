import ClickableComponent from '../ClickableComponent';
import GeometryStyle from '../../../renderingEngine/geometry/GeometryStyle';
import HSLColor from '../../../renderingEngine/colors/HSLColor';
import Color from '../../../renderingEngine/colors/Color';
import Rectangle from '../../../renderingEngine/geometry/Rectangle';

class ToggleButton extends ClickableComponent {
  constructor(point, clickCallback) {
    super(point, clickCallback);

    this.untoggledGeometryStyle = new GeometryStyle({
      fillStyle: Color.WHITE,
      strokeStyle: new HSLColor(177, 97, 58),
      lineWidth: 4,
      lineJoin: 'round',
    });

    this.toggledGeometryStyle = new GeometryStyle({
      fillStyle: Color.AQUAMARINE,
      strokeStyle: new HSLColor(177, 62, 70),
      lineWidth: 4,
      lineJoin: 'round',
    });

    this.isToggled = false;

    const width = 20;
    const height = 20;

    this.rectangle = new Rectangle(this.point.clone(), width, height);
    this.rectangle.geometryStyle = this.untoggledGeometryStyle;

    this.width = width;
    this.height = height;
    const callBack = this.clickCallback;
    this.clickCallback = () => this.OnClick(callBack);
  }

  set untoggledGeometryStyle(value) {
    this._untoggledGeometryStyle = value;
  }

  get untoggledGeometryStyle() {
    return this._untoggledGeometryStyle;
  }

  set toggledGeometryStyle(value) {
    this._toggledGeometryStyle = value;
  }

  get toggledGeometryStyle() {
    return this._toggledGeometryStyle;
  }

  set isToggled(value) {
    this._isToggled = value;
  }

  get isToggled() {
    return this._isToggled;
  }

  OnClick(callback) {
    this.isToggled = !this.isToggled;
    if (this.isToggled) {
      this.rectangle.geometryStyle = this.toggledGeometryStyle;
    } else {
      this.rectangle.geometryStyle = this.untoggledGeometryStyle;
    }
    callback(this.isToggled);
  }

  draw() {
    this.rectangle.draw();
  }
} export default ToggleButton;

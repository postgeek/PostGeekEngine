import ClickableComponent from '../ClickableComponent';
import GeometryStyle from '../../../renderingEngine/geometry/GeometryStyle';
import HSLColor from '../../../renderingEngine/colors/HSLColor';
import Color from '../../../renderingEngine/colors/Color';
import Rectangle from '../../../renderingEngine/geometry/Rectangle';

class RadioButton extends ClickableComponent {

    constructor(point) {
        super(point);
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
    
        const width = 20;
        const height = 20;
    
        this.rectangle = new Rectangle(this.point.clone(), width, height);
        this.rectangle.geometryStyle = this.untoggledGeometryStyle;

        this.isToggled = false;
    
        this.width = width;
        this.height = height;
        this.clickCallback = () => this.onClick();
    }

    set radioButtonGroup(value) {
        this._radioButtonGroup = value;
    }

    get radioButtonGroup() {
        return this._radioButtonGroup;
    }

    set index(value) {
        this._index = value;
    }

    get index() {
        return this._index;
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

    onClick() {
        this.radioButtonGroup.selectedIndex = this.index;
        console.log(this.index);
        this.isToggled = true;
        if (this.isToggled) {
            this.rectangle.geometryStyle = this.toggledGeometryStyle;
        } 
    }

    draw() {
        this.rectangle.draw();
    }

} export default RadioButton;
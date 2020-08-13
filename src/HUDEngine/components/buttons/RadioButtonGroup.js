class RadioButtonGroup {

    constructor() {
        this.buttons = [];
        this._selectedIndex = -1;
    }

    set selectedIndex(value) {
        if(this._selectedIndex !== value) {
            this.buttons[this.selectedIndex].isToggled = false
            this.buttons[this.selectedIndex].rectangle.geometryStyle = this.buttons[this.selectedIndex].untoggledGeometryStyle;
        }
        this._selectedIndex = value;
    }

    get selectedIndex() {
        return this._selectedIndex;
    }

    addRadioButton(button) {
        this.buttons.push(button);
        button.radioButtonGroup = this;
        button.index = this.buttons.length - 1;
        if(this.buttons.length === 1) {
            this._selectedIndex = 0;
            this.buttons[this.selectedIndex].isToggled = true;
            this.buttons[this.selectedIndex].rectangle.geometryStyle = this.buttons[this.selectedIndex].toggledGeometryStyle;
        }
    }

    update() {
        for(let i = 0; i < this.buttons.length; i++) {
            let button = this.buttons[i];
            button.update();
        }  
    }

    draw() {
        for(let i = 0; i < this.buttons.length; i++) {
            let button = this.buttons[i];
            button.draw();
        }
    }

} export default RadioButtonGroup;
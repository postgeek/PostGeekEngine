import ServiceLocator from 'core/ServiceLocator';
import Point from 'core/Point';

class ToolBar {

    constructor(point) {
        this.point = point;
        this.tools = [];
        this.keyboard = ServiceLocator.instance.locate('keyboard');
    }

    getSelectedTool() {
        if(this.selectedIndex !== undefined) {
            return this.tools[this.selectedIndex];
        } 
        return undefined;
    }

    addTool(tool) {
        const x = this.point.x + 64 * this.tools.length + this.tools.length * 8;
        const y = this.point.y;
        const toolPosition = new Point(x, y);
        tool.setPosition(toolPosition);
        this.tools.push(tool);
    }

    draw() {
        this.tools.forEach(function(tool) {
            tool.draw();
        });
    }

    update() {
        this.tools.forEach(function(tool, index) {
            if(this.keyboard.keyDownOnce(tool.hotKey)) {
                this.selectTool(tool, index);
            }
        }.bind(this));
    }

    selectTool(tool, index) {
        if(this.selectedIndex !== index) {
            // Deselect previous tool
            if(this.selectedIndex !== undefined) {
                this.tools[this.selectedIndex].toolContainer.geometryStyle = tool.defaultToolStyle;
                if(this.tools[this.selectedIndex].toolBuilding !== undefined) {
                    this.tools[this.selectedIndex].toolBuilding.setRotation(0);
                }
            }

            // Select new tool
            this.selectedIndex = index;
            tool.toolContainer.geometryStyle = tool.selectedToolStyle;
        } else {
            this.tools[this.selectedIndex].toolContainer.geometryStyle = tool.defaultToolStyle;
            if(this.tools[this.selectedIndex].toolBuilding !== undefined) {
                this.tools[this.selectedIndex].toolBuilding.setRotation(0);
            }
            this.selectedIndex = undefined;
        }
    }

} export default ToolBar;
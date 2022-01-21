export default class AnimatedSprite {

    constructor() {
        this.ticks = 0;
        this.maxTicks = 10;
        this.restartAt = 0;
        this.sprites = [];
        this.currentSpriteIndex = 0;
    }

    update() {
        this.ticks++;
        if(this.tick >= this.maxTicks) {
            if(this.sprites.length > this.currentSpriteIndex)
                this.currentSpriteIndex++;
            else
                this.currentSpriteIndex = 0;
            this.ticks = 0;
        }
    }

    drawAtPoint(drawPoint) {
        this.sprites[this.currentSpriteIndex].drawAtPoint(drawPoint);
    }
}
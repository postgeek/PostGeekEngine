import Scene from 'gameEngine/scene/Scene';
import Rectangle from 'renderingEngine/geometry/Rectangle';
import Point from 'core/Point';
import ServiceLocator from 'core/ServiceLocator';
import KeyboardKey from 'inputEngine/KeyboardKey';
import TextGraphic from 'renderingEngine/text/TextGraphic';
import TextStyle from 'renderingEngine/text/TextStyle';
import Color from 'renderingEngine/colors/Color';
import GeometryStyle from '../../src/renderingEngine/geometry/GeometryStyle';

export default class ShapeDemoScene extends Scene {

  create() {
    this.width = 1200;
    this.height = 500;
    const canvas = document.getElementById('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    canvas.style.height = `${this.height}px`;
    this.scale = 1;
    this.ticks = 0;
    this.unitPixel = 20;
    this.ticksPerRound = 5;
    this.currentTicks = 0;
    this.direction = 'right';
    this.paused = false;
    const snakeHead = new Rectangle(new Point(100, 100), this.unitPixel, this.unitPixel);
    const snakeBody1 = new Rectangle(new Point(80, 100), this.unitPixel, this.unitPixel);
    this.snakeBody = [];
    this.snakeBody.push(snakeHead);
    this.snakeBody.push(snakeBody1);
    this.movementVector = new Point(this.scale, 0);
    this.totalElapsedTime = 0;
    this.snakeUpdatesPerSecond = 15;
    this.createNewSquare();

    this.greenSquareStyle = this.snakeBody[0].geometryStyle = new GeometryStyle({ fillStyle: Color.GREEN });
    this.whiteSquareStyle = this.snakeBody[0].geometryStyle = new GeometryStyle({ fillStyle: Color.WHITE, strokeStyle: Color.BLACK });

    this.scoreText = new TextGraphic(new Point(600,40), this.snakeBody.length - 1);
    this.scoreText.textStyle = new TextStyle({
        strokeStyle: Color.WHITE,
        fillStyle: Color.AQUAMARINE,
        font: '32px Arial',
    });

    this.pausedText = new TextGraphic(new Point(300, 200), "PAUSED");
    this.pausedText.textStyle = new TextStyle({
        strokeStyle: Color.WHITE,
        fillStyle: Color.AQUAMARINE,
        font: '128px Arial',
    });
    this.pausedText.point.x = (this.width - this.pausedText.measureText()) / 2;
    this.pausedText.point.y = this.height / 2;

    this.keyboard = ServiceLocator.instance.locate('keyboard');
    this.keyboard.registerKey(KeyboardKey.R);
    this.keyboard.registerKey(KeyboardKey.P);
    this.keyboard.registerKey(KeyboardKey.UP);
    this.keyboard.registerKey(KeyboardKey.DOWN);
    this.keyboard.registerKey(KeyboardKey.RIGHT);
    this.keyboard.registerKey(KeyboardKey.LEFT);
    this.keyboard.registerKey(KeyboardKey.W);
    this.keyboard.registerKey(KeyboardKey.A);
    this.keyboard.registerKey(KeyboardKey.S);
    this.keyboard.registerKey(KeyboardKey.D);
  }

  initGame() {
    const snakeHead = new Rectangle(new Point(100, 100), this.unitPixel, this.unitPixel);
    const snakeBody1 = new Rectangle(new Point(80, 100), this.unitPixel, this.unitPixel);
    this.snakeBody = [];
    this.snakeBody.push(snakeHead);
    this.snakeBody.push(snakeBody1);
    this.direction = 'right';
    this.movementVector = new Point(this.scale, 0);
    this.scoreText.text = this.snakeBody.length - 1;
    this.createNewSquare();
  }

  update(timestep) {
    if(!this.paused) {
        if(this.totalElapsedTime >= (1000 / this.snakeUpdatesPerSecond)) {
            this.totalElapsedTime -= (1000 / this.snakeUpdatesPerSecond);
            this.updateSnake();
        }
        if (this.direction !== 'down' && (this.keyboard.keyDownOnce(KeyboardKey.UP) || this.keyboard.keyDownOnce(KeyboardKey.W))) {
            this.movementVector = new Point(0, -this.scale);
            this.direction = 'up';
        } else if (this.direction !== 'up' && (this.keyboard.keyDownOnce(KeyboardKey.DOWN) || this.keyboard.keyDownOnce(KeyboardKey.S))) {
            this.movementVector = new Point(0, this.scale);
            this.direction = 'down'
        } else if (this.direction !== 'right' && (this.keyboard.keyDownOnce(KeyboardKey.LEFT) || this.keyboard.keyDownOnce(KeyboardKey.A))) {
            this.movementVector = new Point(-this.scale, 0);
            this.direction = 'left'
        } else if (this.direction !== 'left' && (this.keyboard.keyDownOnce(KeyboardKey.RIGHT) || this.keyboard.keyDownOnce(KeyboardKey.D))) {
            this.movementVector = new Point(this.scale, 0);
            this.direction = 'right'
        }
        if(this.cookie !== undefined && this.areSquaresTouching(this.snakeBody[0], this.cookie)) {
            this.cookie = undefined;
            this.createNewSquare();
            this.snakeDidEat = true;
        }

        for(let i = 1; i < this.snakeBody.length; i++) {
            if(this.areSquaresTouching(this.snakeBody[i], this.snakeBody[0])) {
                this.initGame();
            }
        }
        this.totalElapsedTime += timestep;
    }

    if (this.keyboard.keyDownOnce(KeyboardKey.P)) {
        this.paused = !this.paused;
    }
    if (this.keyboard.keyDownOnce(KeyboardKey.R) || this.gameOver) {
        this.gameOver = false;
        this.initGame();
    }       
  }

  draw(timestep) {
    this.snakeBody[0].geometryStyle = this.greenSquareStyle;
    this.snakeBody[0].draw();
    for(let i = 1; i < this.snakeBody.length; i++) {
        this.snakeBody[i].geometryStyle = this.whiteSquareStyle;
        this.snakeBody[i].draw();
    }
    if(this.paused) {
        this.pausedText.draw();
    }
    if(this.cookie !== undefined) {
        this.cookie.draw();
    }
    this.scoreText.draw();
  }

  updateSnake() {
      let movementPoint = this.movementVector.clone();
      movementPoint.x *= this.unitPixel;
      movementPoint.y *= this.unitPixel;
      let newPoint = this.snakeBody[0].point.clone();
      newPoint = newPoint.add(movementPoint);
      if(newPoint.x >= this.width && this.direction === 'right') {
          //newPoint.x = 0;
          this.gameOver = true;
      }
      if(newPoint.x < 0 && this.direction === 'left') {
          //newPoint.x = this.width - this.unitPixel;
          this.gameOver = true;
      }
      if(newPoint.y >= this.height && this.direction === 'down') {
          //newPoint.y = 0;
          this.gameOver = true;
      }
      if(newPoint.y < 0 && this.direction === 'up') {
        //newPoint.y = this.height - this.unitPixel;
        this.gameOver = true;
      }
      const head = new Rectangle(newPoint, this.unitPixel, this.unitPixel);
      this.snakeBody.unshift(head);
      if(!this.snakeDidEat) {
        this.snakeBody.pop();
      } else {
          this.scoreText.text = `${this.snakeBody.length - 1}`;
          this.snakeDidEat = false;
      }
  }

  areSquaresTouching(square1, square2) {
    return (square1.x < square2.x + square2.width &&
        square1.x + square1.width > square2.x &&
        square1.y < square2.y + square2.height &&
        square1.y + square1.height > square2.y); 
  }

  createNewSquare() {
    const minX = this.unitPixel;
    const minY = this.unitPixel;
    const maxX = this.width - this.unitPixel;
    const maxY = this.height - this.unitPixel;
    let hasCollision = false;
    let potentialCookie = undefined;

    do {
        let cookieX = Math.floor(Math.random() * (maxX - minX) + minX);
        let cookieY = Math.floor(Math.random() * (maxY - minY) + minY);
        potentialCookie = new Rectangle(new Point(cookieX, cookieY), this.unitPixel, this.unitPixel);
        hasCollision = false;
        for(let i = 0; i < this.snakeBody.length && !hasCollision; i++) {
            let snakePart = this.snakeBody[i];
            hasCollision = this.areSquaresTouching(snakePart, potentialCookie);
        }
    } while(hasCollision);
    this.cookie = potentialCookie;
    this.cookie.geometryStyle = new GeometryStyle({
        fillStyle: Color.PINK,
    });
  }
}

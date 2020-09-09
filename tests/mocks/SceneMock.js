import Scene from "../../src/gameEngine/scene/Scene";
import Point from "../../src/core/Point";

/* eslint class-methods-use-this: 0 */
/* eslint no-empty-function: 0 */
 
class SceneMock extends Scene {
    get world() {
      return new Point(0,0);
    }

    set camera(value) {

    }

    get camera() {

    }

    set world(value) {

    }

    create() {

    }

    update() {
      
    }

    draw() {

    }

    suspend() {

    }

    close() {

    }
  } export default SceneMock;
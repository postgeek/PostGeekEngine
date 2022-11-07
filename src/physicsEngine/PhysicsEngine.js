class PhysicsEngine {
  constructor() {
    this.physicsComponents = [];
  }

  /**
   * Initializes the physics engine.
   */
  init() {
    console.log('initializing physics component');
  }

  /**
   * Adds a physics component to the engine
   * @param {PhysicsComponent} physicsComponent add a physics component to the engine
   */
  addPhysicsComponent(physicsComponent) {
    this.physicsComponents.push(physicsComponent);
  }

  /**
   * Updates the engine on every game tick
   */
  update() {
    // TODO: make sure we're not checking every object against every other object
    //console.log(this.physicsComponents[0]);
    for (var i = 0; i < this.physicsComponents.length; i++) {
      var physicsObjectOne = this.physicsComponents[i];
      for (var k = i; k < this.physicsComponents.length; k++) {
        var physicsObjectTwo = this.physicsComponents[k];
        if (i !== k) {
          if (physicsObjectOne.isEnabled && physicsObjectTwo.isEnabled) {
            var collision = this.hasDetectedCollision(physicsObjectOne, physicsObjectTwo);
            //console.log("Collision detected between " + i + " and " + k);
          }
        }
      }
    }
  }

  /**
   * Whether two objects are colliding
   * @param {PhysicsComponent} objectA The first object
   * @param {PhysicsComponent} objectB The second object
   */
  hasDetectedCollision(objectA, objectB) {
    var objectAHitbox = objectA.hitbox;
    var objectBHutbox = objectB.hitbox;

    //console.log(objectAHitbox);
    // Check hitbox collision
    return true;
  }
}
export default PhysicsEngine;

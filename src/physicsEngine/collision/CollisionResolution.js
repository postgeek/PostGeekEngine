export default class CollisionResoution {
  // TODO: Remove only checking boxes
  areEntitiesColliding(sourceEntity, targetEntity) {
    this.isCollidingEdges(sourceEntity, targetEntity);
  }

  resolveBoxCollision(sourceEntity, targetEntity) {
    if (this.areEntitiesColliding(sourceEntity, targetEntity)) {
      // Resolve collision here
      /*
      const sourceVelocity = sourceEntity.velocity;
      const targetVelocity = targetEntity.velocity;

      const currentSourcePosition = sourceEntity.currentPosition;
      const currentTargetPosition = targetEntity.currentPosition;

      const newSourcePosition = currentSourcePosition.add(sourceVelocity);
      const newTargetPosition = currentTargetPosition.add(targetVelocity);
      */
    }
  }

  static isCollidingLeft(sourceRectangle, targetRectangle) {
    const sourceRectangleSideLieft = sourceRectangle.x;
    const targetRectangleSideRight = targetRectangle.x + targetRectangle.width;
    return (sourceRectangleSideLieft < targetRectangleSideRight);
  }

  static isCollidingRight(sourceRectangle, targetRectangle) {
    const sourceRectangleSideRight = sourceRectangle.x + sourceRectangle.width;
    const targetRectangleSideLieft = targetRectangle.x;
    return (sourceRectangleSideRight > targetRectangleSideLieft);
  }

  static isCollidingBottom(sourceRectangle, targetRectangle) {
    const sourceRectangleSideTop = sourceRectangle.y;
    const targetRectangleSideBottom = targetRectangle.y + targetRectangle.height;
    return sourceRectangleSideTop < targetRectangleSideBottom;
  }

  static isCollidingTop(sourceRectangle, targetRectangle) {
    const sourceRectangleSideBottom = sourceRectangle.y + sourceRectangle.height;
    const targetRectangleSideTop = targetRectangle.y;
    return sourceRectangleSideBottom > targetRectangleSideTop;
  }

  static isCollidingEdges(sourceRectangle, targetRectangle) {
    return CollisionResoution.isCollidingLeft(sourceRectangle, targetRectangle)
                && CollisionResoution.isCollidingRight(sourceRectangle, targetRectangle)
                && CollisionResoution.isCollidingTop(sourceRectangle, targetRectangle)
                && CollisionResoution.isCollidingBottom(sourceRectangle, targetRectangle);
  }
}

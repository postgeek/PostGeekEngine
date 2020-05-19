import PhysicsEntity from '../PhysicsEntity';

export default class CollisionResoution {  

    constructor() {

    }

    // TODO: Remove only checking boxes
    areEntitiesColliding(sourceEntity, targetEntity) {
        this.isCollidingEdges(sourceEntity, targetEntity);
    }

    resolveBoxCollision(sourceEntity, targetEntity) {
        if(this.areEntitiesColliding(sourceEntity, targetEntity)) {
            // Resolve collision here
            let sourceVelocity = sourceEntity.velocity;
            let targetVelocity = targetEntity.velocity;

            let currentSourcePosition = sourceEntity.currentPosition;
            let currentTargetPosition = targetEntity.currentPosition;

            let newSourcePosition = currentSourcePosition.add(sourceVelocity);
            let newTargetPosition = currentTargetPosition.add(targetVelocity);
        }
    }

    isCollidingLeft(sourceRectangle, targetRectangle) {
        let sourceRectangleSideLieft = sourceRectangle.x;
        let targetRectangleSideRight = targetRectangle.x + targetRectangle.width;
        return (sourceRectangleSideLieft < targetRectangleSideRight);
      }
    
      isCollidingRight(sourceRectangle, targetRectangle) {
        let sourceRectangleSideRight = sourceRectangle.x + sourceRectangle.width;
        let targetRectangleSideLieft = targetRectangle.x;
        return (sourceRectangleSideRight > targetRectangleSideLieft);
      }
    
      isCollidingBottom(sourceRectangle, targetRectangle) {
        let sourceRectangleSideTop = sourceRectangle.y;
        let targetRectangleSideBottom = targetRectangle.y + targetRectangle.height;
        return sourceRectangleSideTop < targetRectangleSideBottom;
      }
    
      isCollidingTop(sourceRectangle, targetRectangle) {
        let sourceRectangleSideBottom = sourceRectangle.y + sourceRectangle.height;
        let targetRectangleSideTop = targetRectangle.y;
        return sourceRectangleSideBottom > targetRectangleSideTop;
      }
    
      isCollidingEdges(sourceRectangle, targetRectangle) {
        return  this.isCollidingLeft(sourceRectangle, targetRectangle) &&
                this.isCollidingRight(sourceRectangle, targetRectangle) &&
                this.isCollidingTop(sourceRectangle, targetRectangle) &&
                this.isCollidingBottom(sourceRectangle, targetRectangle);
      }
}
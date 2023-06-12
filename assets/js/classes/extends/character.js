class Character extends Sprite {
  constructor(image, sWidth, sHeight, x, y, frameX, frameY, dir, prjSpeed) {
    super(image, sWidth, sHeight, x, y, frameX, frameY, dir);
    this.movement = {
      movingUp: false,
      movingLeft: false,
      movingDown: false,
      movingRight: false,
    };
    this.currentDir = dir;
    this.canFire = true;
    this.prjSpeed = prjSpeed;
  }
  Move() {
    if (this.movement.movingUp) {
      this.positions.y -= 5;
      this.frames.x = 1;
      this.currentDir = -1;
    } else if (this.movement.movingRight) {
      this.positions.x += 5;
    } else if (this.movement.movingDown) {
      this.positions.y += 5;
      this.frames.x = 2;
      this.currentDir = 1;
    } else if (this.movement.movingLeft) {
      this.positions.x -= 5;
    }
  }
  Fire(endPos, image) {
    setTimeout(() => {
      this.canFire = true;
    }, 300);
    const startPos = {
      x: this.positions.x,
      y: this.positions.y,
    };
    const endPosi = endPos;
    console.log('starting position >>', startPos);
    //TODO: Make shoot from center
    const prj = new Projectile(
      image,
      dims.projectile.width,
      dims.projectile.height,
      0,
      0,
      startPos,
      endPosi,
      this.GetMoveCount(startPos, endPosi) // move count
      //TODO: MAKE THIS A METHOD TO GET THE MOVECOUNT
    );
    prj.Fire();
  }
  damage(dmg) {
    //TODO: Add health
  }
  GetMoveCount(startPos, endPos) {
    const s = startPos, e = endPos;
    const d = Math.sqrt(Math.pow(e.x - s.x, 2) + Math.pow(e.y - s.y, 2))
    const moveCount = d/this.prjSpeed;
    return(moveCount);
  }
}

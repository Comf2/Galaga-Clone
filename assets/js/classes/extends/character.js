class Character extends Sprite {
  constructor(image, sWidth, sHeight, x, y, frameX, frameY, dir) {
    super(image, sWidth, sHeight, x, y, frameX, frameY, dir);
    this.movement = {
      movingUp: false,
      movingLeft: false,
      movingDown: false,
      movingRight: false,
    };
    this.currentDir = dir;
    this.canFire = true;
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
    const prj = new Projectile(
      image,
      dims.projectile.width,
      dims.projectile.height,
      0,
      0,
      startPos,
      endPosi,
      10 // move count
    );
    prj.Fire();
  }
  damage(dmg) {
    //TODO: Add health
  }
}

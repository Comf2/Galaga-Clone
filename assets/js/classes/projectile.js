class Projectile extends Sprite {
  constructor(image, sWidth, sHeight, x, y, startPos, endPos, moveCount) {
    super(image, sWidth, sHeight, x, y);
    this.isFiring = true;
    this.startPos = {
      x: startPos.x,
      y: startPos.y,
    };
    this.endPos = {
      x: endPos.x,
      y: endPos.y,
    };
    this.moveCount = moveCount;
  }
  Fire() {
    if (!this.isFiring) return;
    const firePos = this.GetFirePos(this.startPos, this.endPos);

    if (
      firePos.y <= 0 ||
      firePos.y >= window.innerHeight ||
      firePos.x <= 0 ||
      firePos.x >= window.innerWidth
    ) {
      this.isFiring = false;
      console.log('this is such a thing that exists omg');
      return;
    }
    const hit = this.Hit();
    if (hit.didHit === true) {
      this.isFiring = false;
      hit.enemy.damage(10);
      return;
    }
    //not off screen didn't hit. Do Ray!
    this.startPos.x = firePos.x;
    this.startPos.y = firePos.y;
    this.positions.x = firePos.x;
    this.positions.y = firePos.y;

    this.drawProjectile(firePos);

    requestAnimationFrame(this.Fire.bind(this));
  }
  GetFirePos(s, e) {
    //do formula to get new value
    //update positions.x
    const dp = {
      y: s.y - e.y,
      x: s.x - e.x,
    };
    const fp = {
      y: dp.y / this.moveCount,
      x: dp.x / this.moveCount,
    };
    const np = {
      y: s.y - fp.y,
      x: s.x - fp.x,
    };
    console.log('nth pos >>', np);
    return np;
  }
  Hit() {
    //check if projectile hit any enemy
    //if it did return obj with enemy, and true
    //else return null and false
    return {
      enemy: null,
      didHit: false,
    };
  }
  drawProjectile(firePos) {
    c.drawImage(
      playerPrjImg,
      firePos.x,
      firePos.y,
      dims.projectile.width,
      dims.projectile.height
    );
  }
}

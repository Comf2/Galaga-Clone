class ProjectileClass extends Sprite {
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
    if (
      this.y <= 0 ||
      this.y >= window.innerHeight ||
      this.x <= 0 ||
      this.x >= window.innerWidth
    ) {
      console.log(this, 'offscreen');
      this.isFiring = false;
      return;
    }
    const hit = this.Hit();
    if (hit.didHit === true) {
      this.isFiring = false;
      hit.enemy.damage(10);
      return;
    }
    //not off screen didn't hit. Do Ray!
    const fireDir = this.GetFirePos(this.startPos, this.endPos);
    this.startPos.x = fireDir.x;
    this.startPos.y = fireDir.y;
    this.positions.x = fireDir.x;
    this.positions.y = fireDir.y;

    requestAnimationFrame(this.Fire.bind(this));
  }
  GetFirePos(s, e) {
    //do formula to get new value
    //update positions.x
    console.log('starting pos >>', s);
    const dp = {
      y: s.y - e.y,
      x: s.x - e.x,
    };
    console.log('delta pos >>', dp);
    const fp = {
      y: dp.y / this.moveCount,
      x: dp.x / this.moveCount,
    };
    console.log('final pos >>', fp);
    const np = {
      y: s.y + fp.y,
      x: s.x + fp.x,
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
}

const createProjectile = () => ({})

export { 
  ProjectileClass
}
class Projectile extends Sprite {
  constructor(image, sWidth, sHeight, x, y, frameX, frameY, dir) {
    super(image, sWidth, sHeight, x, y, frameX, frameY, dir);
    this.isFiring = false;
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
    const hit = Hit();
    if (hit.didHit === true) {
      this.isFiring = false;
      hit.enemy.damage(10);
      return;
    }
    requestAnimationFrame(Fire);
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

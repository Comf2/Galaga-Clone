class Level {
  constructor(difficulty) {
    this.levelStarted = false;
    this.difficulty = difficulty;
    //make animation play at the beginning before level
    //make levels randomly generated based off difficulty value
    //update level when its over
  }
  StartGame() {
    this.levelStarted = false;
  }
  playGame() {
    //this is called whenever state = 'game';
    player.draw(0, 0);

    if (!this.levelStarted) {
      this.playStartAnim();
      return;
    }
    console.log('game started wooop!');
  }
  playStartAnim() {
    if (player.positions.y === window.innerHeight - 100)
      this.levelStarted = true;
    player.positions.y--;
  }
}
const level = new Level(0);

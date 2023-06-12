class Level {
  constructor(difficulty) {
    this.levelStarted = false;
    this.difficulty = difficulty;
    this.enemies = [];
    //make levels randomly generated based off difficulty value
    //update level when its over
  }
  StartGame() {
    this.levelStarted = false;
    this.generateLevel();
  }
  playGame() {
    //this is called whenever state = 'game';
    player.draw();
    this.enemies.forEach((enemy) => enemy.draw());
    if (!this.levelStarted) {
      this.playStartAnim();
      return;
    }
    //game is started >>
    player.Move();
  }
  playStartAnim() {
    if (player.positions.y === window.innerHeight - 100)
      this.levelStarted = true;
    player.positions.y--;
    this.enemies.forEach((enemy) => {
      enemy.positions.y++;
    });
  }

  generateLevel() {
    let enemyAmmountMulti;

    let availEnemies = []; //TODO: fill when different enemy types
    switch (this.difficulty) {
      case 0:
        enemyAmmountMulti = 0;
        availEnemies = [stickBug_Data, galaga_Data, bee_Data];
        //level 1

        for (let i = 0; i < 10 + enemyAmmountMulti; i++) {
          //TODO: make sprite turn to "enemy" class
          const curEnemy = Math.floor(Math.random() * availEnemies.length);

          const enemyspacing = this.GetEnemySpacing(
            10 + enemyAmmountMulti,
            availEnemies[curEnemy].width
          );
          const enemy = new Character(
            availEnemies[curEnemy].image,
            availEnemies[curEnemy].width,
            availEnemies[curEnemy].height,
            availEnemies[curEnemy].width / 2 +
              (enemyspacing * i + availEnemies[curEnemy].width * i),
            gameStartPos.enemy.y - 120,
            2,
            0,
            1,
            100
          );
          this.enemies.push(enemy);
        }
    }
  }
  GetEnemySpacing(enemyAmm, width) {
    const totalWidth = enemyAmm * width;
    const remainingWidth = window.innerWidth - totalWidth;

    return remainingWidth / enemyAmm;
  }
}
const level = new Level(0);

//imports
const gameArea = document.querySelector('#game-area'),
  c = gameArea.getContext('2d');

gameArea.width = window.innerWidth;
gameArea.height = window.innerHeight;

function Update() {
  c.fillStyle = '#000000';
  c.fillRect(0, 0, window.innerWidth, window.innerHeight);
  CheckState();

  requestAnimationFrame(Update);
}
Update();

//TODO: Add Touch Responsiveness
//use device.touch and custom event
document.addEventListener('keydown', (e) => {
  if (state === 'StartScreen') {
    state = 'game';
    level.StartGame();
  } else if (state === 'game' && level.levelStarted === true) {
    if (e.key === 'w' || e.key === 'ArrowUp') {
      player.movement.movingUp = true;
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
      player.movement.movingRight = true;
    } else if (e.key === 's' || e.key === 'ArrowDown') {
      player.movement.movingDown = true;
    } else if (e.key === 'a' || e.key === 'ArrowLeft') {
      player.movement.movingLeft = true;
    } else if (e.code === 'Space' && player.canFire) {
      player.canFire = false;
      player.Fire(player.currentDir);
    }
  }
});
document.addEventListener('keyup', (e) => {
  if (state === 'game' && level.levelStarted === true) {
    if (e.key === 'w' || e.key === 'ArrowUp') {
      player.movement.movingUp = false;
    } else if (e.key === 'd' || e.key === 'ArrowRight') {
      player.movement.movingRight = false;
    } else if (e.key === 's' || e.key === 'ArrowDown') {
      player.movement.movingDown = false;
    } else if (e.key === 'a' || e.key === 'ArrowLeft') {
      player.movement.movingLeft = false;
    }
  }
});

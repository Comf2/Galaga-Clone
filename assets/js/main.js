//imports
const gameArea = document.querySelector('#game-area'),
  c = gameArea.getContext('2d');

gameArea.width = window.innerWidth;
gameArea.height = window.innerHeight;

function Update() {
  requestAnimationFrame(Update);
  c.fillStyle = '#000000';
  c.fillRect(0, 0, window.innerWidth, window.innerHeight);
  CheckState();
}
Update();

document.addEventListener('keydown', (e) => {
  if (state === 'StartScreen') {
    state = 'game';
    StartGame();
  }
});

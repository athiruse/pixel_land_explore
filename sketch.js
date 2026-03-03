let player;

function preload() {
  preloadWorld();
}

function setup() {
  createCanvas(800, 600);
  player = new Player();
  textFont("Patrick Hand");
}

function draw() {
  if (gameState === "start") drawStartScreen();
  else if (gameState === "characterSelect") drawCharacterSelect();
  else if (gameState === "world") {
    drawWorld();
    player.move();
    player.display();
  } else if (gameState === "store") drawStore();
}

function keyPressed() {
  if (gameState === "start" && key === " ") gameState = "characterSelect";
  if (gameState === "characterSelect") {
    if (key === "1") {
      selectedCharacter = "boy";
      player.setCharacter("boy");
      gameState = "world";
    }
    if (key === "2") {
      selectedCharacter = "girl";
      player.setCharacter("girl");
      gameState = "world";
    }
    if (key === "3") {
      selectedCharacter = "unisex";
      player.setCharacter("unisex");
      gameState = "world";
    }
  }
}

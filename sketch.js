let player;
let worldImg;

function setup() {
  createCanvas(800, 600);
  textFont("Patrick Hand");
  player = new Player();
}

// Preload the world image before anything else
function preload() {
  worldImg = loadImage("assets/images/worldBackground.png");
}

function draw() {
  if (gameState === "start") {
    drawStartScreen();
  } else if (gameState === "characterSelect") {
    drawCharacterSelect();
  } else if (gameState === "world") {
    drawWorldScreen();
    player.display();
    playerMovement();
  }
}

// ---------------- World Screen ----------------
function drawWorldScreen() {
  if (worldImg) {
    image(worldImg, 0, 0, width, height);
  } else {
    background(200); // fallback if image not loaded
  }
}

// ---------------- Player Movement ----------------
function playerMovement() {
  if (keyIsDown(LEFT_ARROW)) player.x -= player.speed;
  if (keyIsDown(RIGHT_ARROW)) player.x += player.speed;
  if (keyIsDown(UP_ARROW)) player.y -= player.speed;
  if (keyIsDown(DOWN_ARROW)) player.y += player.speed;

  player.x = constrain(player.x, 0, width - player.size);
  player.y = constrain(player.y, 0, height - player.size);
}

// ---------------- Key Handling ----------------
function keyPressed() {
  if (gameState === "start" && key === " ") {
    gameState = "characterSelect";
  } else if (gameState === "characterSelect") {
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

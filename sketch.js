var car1, wall, speed, weight, deformation;

function setup() {
  createCanvas(1200, 400);
  car1 = createSprite(40, 200, 80, 50);
  wall = createSprite(1100, 200, 80, 150)
  weight = random(400, 1500);
  speed = random(55, 90);
  deformation = (0.5 * weight * speed * speed) / 22500;
}

function draw() {
  background(255, 255, 255);
  car1.velocityX = speed;
  if (car1.collide(wall)) {
    if (deformation < 100) {
      car1.shapeColor = "Green";
    }
    if (deformation < 180 && deformation > 100) {
      car1.shapeColor = "yellow";
    }
    if (deformation > 180) {
      car1.shapeColor = "red";
    }
  }
  drawSprites();
}
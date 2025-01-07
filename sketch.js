let flowers = [];

function setup() {
  createCanvas(400, 400);
  multipleFlowers(100);
}

function draw() {
  background('black');
  updateAndDrawFlowers();
}

const createFlower = () => {
  let flower = {
    x: random(20, 380),
    y: random(20, 380),
    size: random(20, 75),
    lifespan: random(250, 300),
    color: color(random(255), random(255), random(255))
  };

  return flower;
}

const drawFlower = (flower) => {
  noStroke();
  fill(flower.color)
  ellipse(flower.x, flower.y, flower.size / 2, flower.size);
  ellipse(flower.x, flower.y, flower.size, flower.size / 2);
  fill(255, 204, 0);
  circle(flower.x, flower.y, flower.size / 2);
}

const multipleFlowers = (n = 1) => {
  for(let i = 0; i < n; i++){
    let flower = createFlower();
    flowers.push(flower);
  }
}

function mousePressed(){
  let flower = createFlower();
  flower.x = mouseX;
  flower.y = mouseY;
  flowers.push(flower);
}

const updateAndDrawFlowers = () => {
  for (let flower of flowers){
    drawFlower(flower)
    flower.size *= 0.99;
    flower.lifespan -= 1;
    if(flower.lifespan <= 0){
      let i = flowers.indexOf(flower);
      flowers.splice(i, 1);
    }
  }
}
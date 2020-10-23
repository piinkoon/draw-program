let shapes = []
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('Add Shape');
  button.position(19, 19);
  button.mousePressed(addAShape);
}

function draw() {
  background('#FFCA78');
  for (let shape of shapes) {
    fill(shape.color)
    if (shape.shapeType === 'square') {
      rect(shape.x, shape.y, 100, 100);
    }
    if (shape.shapeType == 'circle') {
      circle(shape.x, shape.y, 100);
    }
    if (shape.shapeType == 'oval') {
      ellipse(shape.x, shape.y, shape.size, 200);
    }
  }
}

function keyPressed() {
  shapes.pop();
  for (let i = 0; i < shapes.length; i++) {
    if (shapes.contains(mouseX, mouseY)) {
      shapes.splice();
    }
  }
}

function addAShape() {
  shape1 = {
    x: random(windowWidth),
    y: random(windowHeight),
    color: random(['#CC3A2F', '#CC6D1F', '#2C7033']),
    shapeType: random(['square', 'circle', 'oval']),
    size: random([25, 50, 100])
  }
  shapes.push(shape1);
}

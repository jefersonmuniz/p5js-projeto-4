function setup() {
    createCanvas(600, 600);
    background(270);
  }
  
  function draw() {
    stroke("blue");
    fill("red");
  
    //console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 45);
    }
  }
  
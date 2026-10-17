

let rotazioneFiori = 0;
let numeroGlifi = 149;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background(242, 235, 220);

  rotazioneFiori = rotazioneFiori + 0.3;

  let numerocolonne = ceil(sqrt(numeroGlifi));
  let numerorighe = ceil(numeroGlifi / numerocolonne);

  let dimcolonna = windowWidth / numerocolonne;
  let dimriga = windowHeight / numerorighe;

  let xcorrente = 0;
  let ycorrente = 0;

  for (let g = 0; g < numeroGlifi; g++) {
    randomSeed(g);
    
    let spostamentoX = random(-dimcolonna * 0.35, dimcolonna * 0.35);
    let spostamentoY = random(-dimriga * 0.35, dimriga * 0.35);
    let dimensioneFiore = random(18, 30);
    
    
    mioGlifo(
      xcorrente + dimcolonna / 2 + spostamentoX,
      ycorrente + dimriga / 2,
      dimensioneFiore,
      g
    );

    xcorrente = xcorrente + dimcolonna;

    if (xcorrente >= windowWidth) {
      xcorrente = 0;
      ycorrente = ycorrente + dimriga;
    }
  }
}

function mioGlifo(_x, _y, _size, g) {
  push();
  translate(_x, _y);

  let petali = random(3, 9);
  let forma = random(2);
  let colore = random(6);

  if (colore < 1) {
    fill(255, 70, 120);
  } else if (colore < 2) {
    fill(255, 150, 50);
  } else if (colore < 3) {
    fill(255, 230, 60);
  } else if (colore < 4) {
    fill(100, 240, 120);
  } else if (colore < 5) {
    fill(60, 210, 255);
  } else {
    fill(180, 80, 255);
  }

  for (let i = 0; i < petali; i++) {
    push();
    rotate(i * 360 / petali + rotazioneFiori * (g % 2 == 0 ? 1 : -1));
    translate(_size * 0.25, 0);

    if (forma < 1) {
      circle(0, 0, _size * 0.4);
    } else {
      triangle(
        _size * 0.2, 0,
        -_size * 0.15, -_size * 0.15,
        -_size * 0.15, _size * 0.15
      );
    }

    pop();
  }

  let centro = random(4);

  if (centro < 1) {
    fill(255, 245, 180);
  } else if (centro < 2) {
    fill(255, 100, 80);
  } else if (centro < 3) {
    fill(80, 60, 180);
  } else {
    fill(255, 255, 255);
  }

  circle(0, 0, _size * 0.28);

  pop();
}



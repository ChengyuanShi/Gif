let player;
let pImg;
let cImg;
let bImg;
let coin = [];

function preload(){
pImg = loadImg('image/slime.gif');
cImg = loadImg('image/coin.gif');
bImg = loadImg('image/BG.gif');
}

function setup() {
  createCanvas(600, 600);
  player = new Player();
}

function keyPressed(){
  if (key == ' '){
    player.jump();

  }
}

function draw() {
  background(bImg);

  // if(random(1) < 0.01) {
  //    coin.push(new Coin());
  //    }


  player.show();
  player.move();

  for (let t of coin){
    coin.move();
    coin.show();
  }
}

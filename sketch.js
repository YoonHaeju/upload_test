// 폰이 흔들리는 속도에 따라서 색이 변경됨

let r, g, b;
function setup(){
  createCanvas(displayWidth, displayHeight);
  r= random(50, 255);
  g= random(0, 200);
  b= random(50, 255);
}

function draw(){
  background(r, g, b);
  // console.log('draw');   // 어차피 콘솔창 폰에서는 못봄ㅋ
  // console.log(accelerationX + "," +  accelerationY + "," + accelerationZ);
}

function deviceMoved(){   // 디바이스가 움직이면
  r= map(accelerationX, -90, 90, 100, 175);   // 가속도 센서
  g= map(accelerationY, -90, 90, 100, 200);
  b= map(accelerationZ, -90, 90, 100, 200);
  text(accelerationX + "," +  accelerationY + "," + accelerationZ, 10, 10); // 화면상에 글씨가 뜨도록
}
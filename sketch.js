var wave;
var playing = false;

function setup() {  // 화면 세팅공간 (실행시 처음에 한번 실행)
  //createCanvas(displayWidth, displayHeight);  // 각 휴대폰 화면의 크기에 맞춰서 보이도록
  createCanvas(640, 480);

  wave = new p5.Oscillator();   // osc~의 역할
  wave.setType('sine');   //파형을 sine파로
  wave.freq(440); // 주파수 (Hz) frequancy
  wave.amp(1);    // 소리의 크기 (볼륨) // 0~1
  
  button = createButton('play/pause');
  button.mousePressed(toggle);

}

/*
function draw() {   // 1초에 60프레임씩 무한 반복
  

}
*/

function toggle(){
  if(!playing){
    wave.start();   // 소리가 남
    wave.amp(0.5, 1);
    playing = true;
  }else{
    wave.amp(0, 1);
    playing=false;
  }
}

const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const color = document.getElementById('color');
const width = document.getElementById('width');

const angle = (degrees = 360) => (Math.PI / 180) * degrees;

// олимпийские кольца
ctx2.beginPath();
ctx2.arc(100, 90, 50, 0, angle(), false);
ctx2.lineWidth = '12';
ctx2.strokeStyle = '#0e87c8';
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(220, 90, 50, 0, angle(), false);
ctx2.lineWidth = '12';
ctx2.strokeStyle = '#000';
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(340, 90, 50, 0, angle(), false);
ctx2.lineWidth = '12';
ctx2.strokeStyle = '#db0a2a';
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(160, 136, 50, 0, angle(), false);
ctx2.lineWidth = '12';
ctx2.strokeStyle = '#fae22e';
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(220, 90, 50, 1, 2, false);
ctx2.lineWidth = '12';
ctx2.strokeStyle = '#000';
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(100, 90, 50, 5.5, 0.5, false);
ctx2.lineWidth = '12';
ctx2.strokeStyle = '#0e87c8';
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(280, 136, 50, 0, angle(), false);
ctx2.lineWidth = '12';
ctx2.strokeStyle = '#2efa35';
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(220, 90, 50, 5.5, 6.5, false);
ctx2.lineWidth = '12';
ctx2.strokeStyle = '#000';
ctx2.stroke();

ctx2.beginPath();
ctx2.arc(340, 90, 50, 1.5, 2.5, false);
ctx2.lineWidth = '12';
ctx2.strokeStyle = '#db0a2a';
ctx2.stroke();


// paint
canvas1.addEventListener('mousemove', (event) => {
  const x = event.offsetX,
    y = event.offsetY,
    mx = event.movementX,
    my = event.movementY;

  if (event.buttons > 0) {
    ctx1.beginPath();
    ctx1.moveTo(x, y);
    ctx1.lineTo(x - mx, y - my);
    ctx1.stroke();
    ctx1.closePath();
    // ctx1.lineWidth = 6;
  }
  
});

color.addEventListener('input', () => ctx1.strokeStyle = color.value);
width.addEventListener('input', () => ctx1.lineWidth = width.value);

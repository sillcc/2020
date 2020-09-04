// // https://codepen.io/cooper_hu/pen/vmrNpO
// /* Paper JS Setup for working in CodePen */
// /* ====================== *
//  *  0. Initiate Canvas    *
//  * ====================== */

// var can = document.getElementById("canvas");
// can.style.width = window.innerWidth+"px";
// can.style.height = window.innerHeight+"px";
// //Install paper to the global scope
// paper.install(window);
// paper.setup("canvas");


// var xCount=16;
// var yCount=16;
// var gridX=20;
// var gridY=10;
// var offsetX=window.innerWidth/2;
// var offsetY=window.innerHeight/4;

// for(var j=0;j<yCount;j++){
// 	for(var i=0;i<xCount;i++){
// 		var x = (i - j) * gridX;
// 		var y = (i + j) * gridY;		
// 		var path=new Path.Circle([x+offsetX,y+offsetY],40)
// 		path.fillColor=new Color(i/xCount,j/yCount,1);
// 		path.data.x=path.position.x;
// 		path.data.y=path.position.y;
// 	}
// }

// view.onFrame=function(event){
// 	for(var i=0;i<project.activeLayer.children.length;i++){
// 	var item=project.activeLayer.children[i];
// 	item.position.y=item.data.y+Math.sin(event.count/30+(i/3))*40
// 	}
// }

/* ====================== */

function startTransition() {
  document.getElementById('mask').classList.add('on');
  document.documentElement.classList.add('on');
}

function delay (URL) {
  setTimeout( function() { window.location = URL }, 600 );
}

/* ====================== */

var asterix = document.querySelector('.asterix');
asterix.addEventListener('click', function(e) {

  let x = e.target.clientWidth / 2;
  let y = e.target.clientHeight / 2;

  let ripple = document.createElement('span');
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  this.appendChild(ripple);

  setTimeout(() => {
    ripple.remove()
  },500);
})

/* ====================== */

var cards = document.querySelectorAll('#grid-for-cards > a:not(.★)');
var length = cards.length - 2;

var array = Array.from(cards);
function shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};
var random = shuffle(array);

for(var i = 0; i < cards.length; i++){
  array[i].style.order = i;
}

for(var i = 0; i < length; i++){
  random[i].classList.add('off');
}

/* ====================== */

var audio = document.getElementById("audio");
function ping() {
  audio.play();
}

/* ====================== */

var clickCounter = 0;

function onOut_1() {
  document.documentElement.classList.toggle('dark-mode');
};

function onOut_2() {
  clickCounter = 0;
};

function onOver(t) {
  t.removeEventListener('mouseout', onOut_2);
  t.addEventListener('mouseout', onOut_1);
  document.documentElement.classList.toggle('dark-mode');
};

function onClick(t) {
  t.removeEventListener('mouseout', onOut_1);
  t.addEventListener('mouseout', onOut_2);
  clickCounter++;
  if (clickCounter > 1) {
    document.documentElement.classList.toggle('dark-mode');
  }
};

var clock = new Date().getHours();
if (clock >= 7 && clock <= 19) {
  document.documentElement.classList.remove('dark-mode');
} else {
  document.documentElement.classList.add('dark-mode');
}

/* ====================== */

let circle = document.querySelectorAll('#rising > div:not(first-of-type)');

for (var i = 0; i < circle.length; i++) {
  var cur = -i * 3;
  circle[i].style.setProperty('animation-delay', cur + 's');
}
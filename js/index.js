// https://codepen.io/cooper_hu/pen/vmrNpO
/* Paper JS Setup for working in CodePen */
/* ====================== *
 *  0. Initiate Canvas    *
 * ====================== */
paper.install(window);
setTimeout(function(){
  with (paper) {
    paper.setup(document.getElementById("canvas"));

    /* ====================== *
    *  1. Test Shape         *
    * ====================== */

    var interval = 12;
    var size = ((view.size.height / 2) + (view.size.width / 2)) / 2;
    var circleGroup = new Group();

    for (var i = 1; i < interval; i++) {
      var circle = new Path.Circle({
        // radius:  (i * (i / 10)) * size,
        radius: (size / interval) * (i * 3),
        // position: new Point(0,  view.size.height * 2),
        position: view.center,
        strokeColor: '#000',
        strokeWidth: size * 0.002,
        parent: circleGroup,
      });
    };

    // for (var i = 1; i < interval; i++) {
    //   var circle = new Path.Circle({
    //     // radius:  (i * (i / 10)) * size,
    //     radius: (((size / interval) * i) - (size)),
    //     position: new Point(0,  view.size.height * 2),
    //     // position: view.center,
    //     strokeColor: '#f40000',
    //     strokeWidth: (size / interval) * 0.025,
    //     parent: circleGroup,
    //   });
    // };

    /* ====================== *
    *  2. Mouse Interaction  *
    * ====================== */

    var mousePointX = view.size.width / 2;
    var mousePointY = view.size.height / 2;

    view.onMouseMove = function(event) {
      mousePointX = event.point.x;
      mousePointY = event.point.y;
    }

    /* ====================== *
    *  3. Animation          *
    * ====================== */

    var children = circleGroup.children;

    view.onFrame = function(event) {
      for (var i = 0; i < children.length; i++) {
        var item = children[i];
        var first = children[1];
        deltaX = (mousePointX - item.position.x) / (i + 2);
        deltaY = (mousePointY - item.position.y) / (i + 2);

        item.position.x += deltaX;
        item.position.y += deltaY;

        // first.opacity = 0;
      }
    };
  }
}, 0);

/* ====================== */

function startTransition() {
  document.getElementById('mask').classList.add('on');
  document.documentElement.classList.add('on');
}

function delay (URL) {
  setTimeout( function() { window.location = URL }, 600 );
}

/* ====================== */

var swi = document.querySelector('.switch');
swi.addEventListener('click', function(e) {

  let x = e.target.clientWidth / 2;
  let y = e.target.clientHeight / 2;

  let ripple = document.createElement('span');
  ripple.style.left = '100vw';
  ripple.style.top = '0px';
  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove()
  },1000);
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

// var clickCounter = 0;

// function onOut_1() {
//   document.documentElement.classList.toggle('dark-mode');
// };

// function onOut_2() {
//   clickCounter = 0;
// };

// function onOver(t) {
//   t.removeEventListener('mouseout', onOut_2);
//   t.addEventListener('mouseout', onOut_1);
//   document.documentElement.classList.toggle('dark-mode');
// };

// function onClick(t) {
//   t.removeEventListener('mouseout', onOut_1);
//   t.addEventListener('mouseout', onOut_2);
//   clickCounter++;
//   if (clickCounter > 1) {
//     document.documentElement.classList.toggle('dark-mode');
//   }
// };

function onClick(t) {
  document.documentElement.classList.toggle('dark-mode');
  document.querySelector('.switch').classList.toggle('dark-mode');
};

var clock = new Date().getHours();
if (clock >= 7 && clock <= 19) {
  document.documentElement.classList.remove('dark-mode');
} else {
  document.documentElement.classList.add('dark-mode');
}
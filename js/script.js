function toggleDarkMode() {
  document.documentElement.classList.toggle('dark-mode');
};

// var clock = new Date().getHours();
// if (clock >= 7 && clock <= 19) {
//   document.documentElement.classList.remove('dark-mode');
// } else {
//   document.documentElement.classList.add('dark-mode');
// }

bodymovin.loadAnimation({
  container: illu,
  animType: 'svg',
  autoplay: true,
  loop: true,
  path: 'assets/eye.json',
});

var mouseContainer = document.body;
var lottieContainer = document.getElementById('lottieContainer');

var anim = bodymovin.loadAnimation({
  container: lottieContainer,
  animType: 'svg',
  autoplay: false,
  loop: false,
  path: 'assets/confetti.json',
});

function yeeah() {
  anim.goToAndPlay(0);
};

// inView.offset(100);
// inView('*[class*="col-"]:not(article), h1')
//   .on('enter', el => {
//     el.classList.add('an-in');
//   });
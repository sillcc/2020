var mouseContainer = document.body;
var lottieContainer = document.getElementById('lottieContainer');

var anim = bodymovin.loadAnimation({
  container: lottieContainer,
  animType: 'svg',
  autoplay: false,
  loop: false,
  path: 'assets/confetti.json',
  // path: 'https://assets2.lottiefiles.com/packages/lf20_94B4Hs.json'
});

function yeeah() {
  anim.goToAndPlay(0);
};
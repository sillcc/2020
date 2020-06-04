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

bodymovin.loadAnimation({
  container: lottieContainer2,
  animType: 'svg',
  autoplay: true,
  loop: true,
  path: 'assets/enlightened.json',
});
// https://lottiefiles.com/web-player?lottie_url=https%3A%2F%2Fassets6.lottiefiles.com%2Fpackages%2Flf20_EvfyyO.json

function yeeah() {
  anim.goToAndPlay(0);
};
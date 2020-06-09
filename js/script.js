bodymovin.loadAnimation({
  container: illu,
  animType: 'svg',
  autoplay: true,
  loop: false,
  path: 'assets/explosion.json',
});
// https://lottiefiles.com/web-player?lottie_url=https%3A%2F%2Fassets6.lottiefiles.com%2Fpackages%2Flf20_EvfyyO.json
// https://lottiefiles.com/23844-concept-man-flying-with-books

// https://assets5.lottiefiles.com/packages/lf20_sugqmW.json
// https://assets4.lottiefiles.com/packages/lf20_E3zV8N.json
// https://assets6.lottiefiles.com/private_files/lf30_jlRfsc.json
// https://lottiefiles.com/4419-presto-loading-buddy-poppin
// https://lottiefiles.com/111-xuanwheel-logo


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

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark-mode');
};
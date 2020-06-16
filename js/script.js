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
  path: 'assets/eye-1.json',
});

// https://lottiefiles.com/18364-celebaration
// https://lottiefiles.com/web-player?lottie_url=https%3A%2F%2Fassets6.lottiefiles.com%2Fpackages%2Flf20_EvfyyO.json
// https://lottiefiles.com/23844-concept-man-flying-with-books

// https://assets5.lottiefiles.com/packages/lf20_sugqmW.json
// https://assets4.lottiefiles.com/packages/lf20_E3zV8N.json
// https://assets6.lottiefiles.com/private_files/lf30_jlRfsc.json
// https://lottiefiles.com/4419-presto-loading-buddy-poppin
// https://lottiefiles.com/111-xuanwheel-logo
// https://assets9.lottiefiles.com/packages/lf20_BWSJId.json
// https://lottiefiles.com/23402-question-boy
// https://assets9.lottiefiles.com/packages/lf20_G5TBf4.json
// https://lottiefiles.com/17594-brodie-jordan
// https://lottiefiles.com/17415-push-to-talk

var mouseContainer = document.body;
var lottieContainer = document.getElementById('lottieContainer');

var anim = bodymovin.loadAnimation({
  container: lottieContainer,
  animType: 'svg',
  autoplay: false,
  loop: false,
  path: 'assets/confetti3.json',
  // path: 'https://assets2.lottiefiles.com/packages/lf20_94B4Hs.json'
});

function yeeah() {
  anim.goToAndPlay(0);
};
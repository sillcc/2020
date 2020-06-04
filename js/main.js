document.addEventListener('DOMContentLoaded', () => {

  const options = {
    plugins: [
      new SwupOverlayTheme({
        color: 'var(--color-1)',
      })
    ]
  };

  const swup = new Swup(options);

  function toggleFullScreen() {
    document.documentElement.classList.toggle('is-fullscreen');
    document.getElementById('click-area').classList.toggle('no-fullscreen');
  };
  document.addEventListener('fullscreenchange', toggleFullScreen);

  /*!
  * Get the contrasting color for any hex color
  * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
  * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
  */
  var getContrast = function (hexcolor) {
    // If a leading # is provided, remove it
    if (hexcolor.slice(0, 1) === '#') {
      hexcolor = hexcolor.slice(1);
    }
    // If a three-character hexcode, make six-character
    if (hexcolor.length === 3) {
      hexcolor = hexcolor.split('').map(function (hex) {
        return hex + hex;
      }).join('');
    }
    // Convert to RGB value
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    // Get YIQ ratio
    var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    // Check contrast
    return (yiq >= 128) ? 'black' : 'white';
  };
  function convert(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hexCode(i) {
      return ('0' + parseInt(i).toString(16)).slice(-2);
    }
    return '#' + hexCode(rgb[1]) + hexCode(rgb[2]) +
      hexCode(rgb[3]);
  };

  function init() {
    
    document.querySelector('#slideshow-container').querySelectorAll('.backgrounds').forEach(n => n.remove());

    Reveal.initialize({
      width: '100%',
      height: '100%',
      margin: 0,
      minScale: 1,
      maxScale: 1,
      transition: 'fade',
      backgroundTransition: 'fade',
      transitionSpeed: 'normal',
      navigationMode: 'linear',
      progress: false,
      overview: false,
      help: false,
      history: false,
      hash: false,
      center: false,
      controls: false,
      display: 'flex',
    });

    Reveal.configure({
      keyboard: {
        37: 'prev',
        38: 'left',
        39: 'next',
        40: 'right',
      }
    });

    Reveal.addEventListener('ready', function () {
      Reveal.slide(-1, -1, -1);
      // let state = Reveal.getState();
      // Reveal.setState(state);
      Reveal.sync();
      document.querySelector('#slideshow-container').querySelectorAll('#slideshow-container > *:not(.slides):not(.pause-overlay)').forEach(n => n.remove());

      var els = document.querySelectorAll('.project-dida-container > *');
      for (i = 0; i < els.length; ++i) {
        els[i].classList.add('fade-in');
      }
    });

    const arrow = document.getElementById('arrow');
    document.getElementById('click-area').addEventListener('mousemove', e => {
      arrow.setAttribute('style', 'top: ' + (e.pageY - 40) + 'px; left: ' + (e.pageX - 40) + 'px; font-size: calc(8em + 0.5vw);');
    });
    document.getElementById('click-area').addEventListener('mouseout', e => {
      arrow.setAttribute('style', 'top: ' + (e.pageY - 40) + 'px; left: ' + (e.pageX - 40) + 'px; font-size: 0;');
    });

    document.getElementById('prev').addEventListener('click', () => {
      Reveal.prev();
    });
    document.getElementById('next').addEventListener('click', () => {
      Reveal.next()
    });

    var goToPrev = document.getElementById('click-area').getAttribute('prev');
    document.getElementById('prev').href = goToPrev;
    Reveal.addEventListener('slidechanged', function () {
      function delay() {
        var progress = Reveal.getProgress();
        if (progress === 0) {
          var goToPrev = document.getElementById('click-area').getAttribute('prev');
          document.getElementById('prev').href = goToPrev;
        } else if (progress === 1) {
          var goToNext = document.getElementById('click-area').getAttribute('next');
          document.getElementById('next').href = goToNext;
        } else {
          document.getElementById('prev').removeAttribute('href');
          document.getElementById('next').removeAttribute('href');
        }
      }
      setTimeout(delay, 100);
    });

    document.documentElement.style.setProperty('--color-contrast', 'white');

    function delay() {
      var el = document.querySelector('section.present');
      if (el.classList.contains('on-top')) {
        document.body.style.backgroundColor = 'transparent';
        var contrastColor = getContrast('#000000');
      } else if (el.classList.contains('has-bg-animated')) {
        var contrastColor = getContrast('#ffffff');
      } else {
        var rgb = window.getComputedStyle(el, null).getPropertyValue('background-color');
        var bgColor = convert(rgb);
        document.body.style.backgroundColor = bgColor;
        var contrastColor = getContrast(bgColor);
      };
      document.documentElement.style.setProperty('--color-contrast', contrastColor);
    };
    setTimeout(delay, 100);

    Reveal.addEventListener('slidechanged', function () {
      setTimeout(delay, 100);
    });
  
  };

  init();
  swup.on('contentReplaced', init);

  // function bla() {
  //   console.log('ciao');
  // }
  // swup.on('contentReplaced', bla);

});
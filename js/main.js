document.addEventListener('DOMContentLoaded', () => {

  const swup = new Swup({
    plugins: [
      new SwupPreloadPlugin(), 
      new SwupOverlayTheme({
        color: 'red',
      })
    ]
  });

  function init() {
    Splitting();
    
    var rellax = new Rellax('.rellax', {
      horizontal: true,
    });

    inView('.splitting')
    .on('enter', el => {
      el.classList.add('on');
    });
    
    if (document.querySelector('#index')) {

      Marquee3k.init();
      
      inView('.tile')
      .on('enter', el => {
        el.classList.add('an-in');
      });

      var options = {
        valueNames: [
          { data: ['year'] },
          { data: ['tags'] },
        ]
      };
      var indexList = new List('index', options);
      indexList.sort('year', { order: 'desc' }); 
      document.body.style.backgroundColor = 'black';
      document.querySelectorAll('.tag').forEach(item => {
        item.addEventListener('click', (e) => {
          indexList.search(e.target.getAttribute('data-name'));
        });
      });
    }
    if (document.querySelector('#slideshow-container')) {
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
        hash: true,
        center: false,
        controls: false,
        display: 'block',
      });

      Reveal.configure({
        keyboard: {
          37: 'prev',
          38: 'left',
          39: 'next',
          40: 'right',
        }
      });

      Reveal.slide(-1, -1, -1);

      document.addEventListener('fullscreenchange', function () {
        document.documentElement.classList.toggle('is-fullscreen');
        document.getElementById('nav-zone').classList.toggle('no-fullscreen');
        document.getElementById('header').classList.toggle('no-fullscreen');
        document.getElementById('main').classList.toggle('no-fullscreen');
        document.getElementById('footer').classList.toggle('no-fullscreen');
      });

      const cursor = document.getElementById('cursor');
      document.getElementById('nav-zone').addEventListener('mousemove', e => {
        cursor.setAttribute('style', 'top: ' + (e.pageY - 40) + 'px; left: ' + (e.pageX - 40) + 'px; font-size: calc(8em + 0.5vw);');
      });
      document.getElementById('nav-zone').addEventListener('mouseout', e => {
        cursor.setAttribute('style', 'top: ' + (e.pageY - 40) + 'px; left: ' + (e.pageX - 40) + 'px; font-size: 0;');
      });

      document.getElementById('prev').addEventListener('click', () => {
        Reveal.prev();
      });
      document.getElementById('next').addEventListener('click', () => {
        Reveal.next()
      });

      var goToPrev = document.getElementById('nav-zone').getAttribute('prev');
      document.getElementById('prev').href = goToPrev;
      Reveal.addEventListener( 'slidechanged', function( event ) {
        setTimeout(delay, 100);
        function delay() {
          var progress = Reveal.getProgress();
          if (progress === 0) {
            document.getElementById('nav-zone').addEventListener('scroll', scrollHover);
            //document.querySelector('.slides').classList.add('on-top');
            document.getElementById('nav-zone').style.zIndex = '+150';
            var goToPrev = document.getElementById('nav-zone').getAttribute('prev');
            document.getElementById('prev').href = goToPrev;
          } else if (progress === 1) {
            var goToNext = document.getElementById('nav-zone').getAttribute('next');
            document.getElementById('next').href = goToNext;
          } else {
            document.getElementById('nav-zone').removeEventListener('scroll', scrollHover);
            //document.querySelector('.slides').classList.toggle('on-top');
            document.getElementById('prev').removeAttribute('href');
            document.getElementById('next').removeAttribute('href');
          }
        }
      });

      document.getElementById('nav-zone').addEventListener('scroll', scrollHover);
      function scrollHover() {
        var child1 = document.querySelector('section.present > .project-dida-container');
        var child2 = document.querySelector('section.present > .project-dida-container > .dida');
        var h1 = child1.scrollHeight;
        var h2 = child2.scrollHeight;
        var controls = document.querySelectorAll('.nav-slides');

        if (h1 > h2) {
          for (i = 0; i < controls.length; ++i) {
            controls[i].style.height = h1 + 'px';
          }
          child1.scrollTop = this.scrollTop;
        } else {
          for (i = 0; i < controls.length; ++i) {
            controls[i].style.height = h2 + 'px';
          }
          child2.scrollTop = this.scrollTop;
        };
      };

      /*Reveal.addEventListener('onTop', function () {
        document.getElementById('nav-zone').addEventListener('scroll', scrollHover);

        document.querySelector('.slides').classList.add('on-top');
        document.getElementById('nav-zone').style.zIndex = '+150';

      }, false);

      Reveal.addEventListener('onTop-end', function () {
        document.getElementById('nav-zone').removeEventListener('scroll', scrollHover);

        document.querySelector('.slides').classList.toggle('on-top');
      }, false);*/

      /*!
       * Get the contrasting color for any hex color
       * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
       * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
       * @param  {String} A hexcolor value
       * @return {String} The contrasting color (black or white)
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
        return '#' + hexCode(rgb[1]) + hexCode(rgb[2]) 
                + hexCode(rgb[3]); 
      }; 

      // Set the color/BG color

      document.documentElement.style.setProperty('--color-contrast', 'white');

      Reveal.addEventListener('slidechanged', function (event) {
        setTimeout(delay, 100);
        function delay() {
          var elem = document.querySelector('.slide-background.present');
          var rgb = window.getComputedStyle(elem, null).getPropertyValue('background-color');
          var bgColor = convert(rgb);
          document.body.style.backgroundColor = bgColor;
          var contrastColor = getContrast(bgColor);
          document.documentElement.style.setProperty('--color-contrast', contrastColor);
        };        
      });
    }
  }

  // run once 
  init();

  // this event runs for every page view after initial load
  swup.on('contentReplaced', init);


  function bla() {
    console.log('ciao');
  }
  swup.on('contentReplaced', bla);


});
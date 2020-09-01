'use strict';

document.addEventListener('DOMContentLoaded', function () {

   /*__ Font Support Alert __*/

   var alert = document.getElementById('alert_no_vf_support');
   var alertDelete = alert.firstElementChild;
 
   if ("CSS" in window === true || "supports" in CSS === true) {
     if (CSS.supports("(font-variation-settings: normal)")) {
       //alert("Your browser supports Variable Fonts");
     } else {
       //alert("Your browser doesn't support Variable Fonts");
       alert.classList.toggle('is-hidden');
     }
   }
 
   alertDelete.addEventListener('click', function() {
     alert.parentElement.removeChild(alert);
   });
 

  /*__ ListJs Starter __*/

  var options = {
    valueNames: [
      //{data: ['id']}, 
      'tag',
    ]
  };

  var iconList = new List('icon-list', options);

  iconList.sort('tag', { order: "asc" });

  /*__ ClipboardJS Starter __*/

  new ClipboardJS('.square');

  /*__ Play all animations __*/

  var playAll = document.getElementById('start-all');
  var icons = document.querySelectorAll('.la.la-3x');

  playAll.addEventListener('click', function() {
    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.toggle("start-da-party");
    }
  });
});
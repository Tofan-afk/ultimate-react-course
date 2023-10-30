// AIzaSyCjSfrOkRG5bdakA_Iu-ub-kTSiw-Sb42s

"use strict";

function initMap() {
  const myLatLng = {
    lat: 22.54751968383789,
    lng: 88.35943603515625,
  };
  const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 22,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location",
  });
}

let url = "https://www.google.com/maps/place/The+Kitchenette/@22.5474839,88.3592536,21z/data=!4m6!3m5!1s0x3a027732c69efbd7:0x3c0d5621e200340e!8m2!3d22.5475042!4d88.3594417!16s%2Fg%2F11h9387nb2?entry=ttu";
document.getElementById("gmp-map").addEventListener('dblclick', function() {
    window.open(url, '_blank');
});

var txt = "Where can you find us?!<3 ";
var speed = 50;

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    typeWriter();
  }, 5000); // Adjust the time according to your needs
});

function typeWriter() {
  if (i < txt.length) {
      document.getElementById("where").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
  }
}

window.onscroll = function () {
  var winScroll = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
  if (winScroll > 549)
  {
  }
}
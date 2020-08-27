var i = 0;
var images = [];
var time = 3000;

images[0] = "/img/storm-dark.jpg";
images[1] = "/img/bessy-close-up.jpg";
images[2] = "/img/eggs-in-the-metal-basket-6420.jpg";
images[3] = "/img/chikens-facing-away-from-camera-cropped.jpg";
images[4] = "/img/eggs12pk.png";
images[5] = "/img/bessy-looking-at-camera.jpg";
images[6] = "/img/bessy-looking-away.jpg";

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

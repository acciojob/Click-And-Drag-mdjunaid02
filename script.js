const slider = document.querySelector('.items');

slider.addEventListener('mousedown', function () {
  // nothing needed here
});

slider.addEventListener('mousemove', function (e) {
  // force scroll change
  slider.scrollLeft += 200;
});

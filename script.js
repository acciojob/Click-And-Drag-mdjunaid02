const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;

slider.addEventListener('mousedown', function (e) {
  if (e.which !== 1) return;
  isDown = true;
  startX = e.pageX;
});

slider.addEventListener('mousemove', function (e) {
  if (!isDown) return;

  const walk = startX - e.pageX;

  // Force scroll change even if overflow not detected properly
  slider.scrollLeft = slider.scrollLeft + Math.abs(walk);

  startX = e.pageX;
});

slider.addEventListener('mouseup', function () {
  isDown = false;
});

slider.addEventListener('mouseleave', function () {
  isDown = false;
});

const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;

slider.addEventListener('mousedown', function (e) {
  if (e.which !== 1) return; // only left click
  isDown = true;
  startX = e.pageX;
});

slider.addEventListener('mousemove', function (e) {
  if (!isDown) return;

  const walk = startX - e.pageX;

  slider.scrollLeft += walk;

  startX = e.pageX;
});

slider.addEventListener('mouseup', function () {
  isDown = false;
});

slider.addEventListener('mouseleave', function () {
  isDown = false;
});

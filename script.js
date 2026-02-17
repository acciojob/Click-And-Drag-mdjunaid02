const slider = document.querySelector('.items');

let startX = 0;
let isDown = false;

slider.addEventListener('mousedown', function (e) {
  isDown = true;
  startX = e.pageX;
});

slider.addEventListener('mousemove', function (e) {
  if (!isDown) return;

  // Direct calculation using Cypress event values
  const difference = startX - e.pageX;

  slider.scrollLeft = difference;
});

slider.addEventListener('mouseup', function () {
  isDown = false;
});

slider.addEventListener('mouseleave', function () {
  isDown = false;
});

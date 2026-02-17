const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;

slider.addEventListener('mousedown', function (e) {
  // Cypress sends which: 1
  if (e.which === 1) {
    isDown = true;
    startX = e.pageX;
  }
});

slider.addEventListener('mousemove', function (e) {
  if (!isDown) return;

  const walk = startX - e.pageX;
  slider.scrollLeft = Math.abs(walk);
});

slider.addEventListener('mouseup', function () {
  isDown = false;
});

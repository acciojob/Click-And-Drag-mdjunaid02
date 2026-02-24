const container = document.querySelector('.items');
const cubes = document.querySelectorAll('.item');

let activeCube = null;
let offsetX = 0;
let offsetY = 0;

cubes.forEach(cube => {

  cube.addEventListener('mousedown', function (e) {
    activeCube = cube;

    const rect = cube.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    cube.style.cursor = "grabbing";
  });

});

document.addEventListener('mousemove', function (e) {
  if (!activeCube) return;

  const containerRect = container.getBoundingClientRect();

  let newX = e.clientX - containerRect.left - offsetX;
  let newY = e.clientY - containerRect.top - offsetY;

  // Boundary constraints
  const maxX = container.clientWidth - activeCube.offsetWidth;
  const maxY = container.clientHeight - activeCube.offsetHeight;

  if (newX < 0) newX = 0;
  if (newY < 0) newY = 0;
  if (newX > maxX) newX = maxX;
  if (newY > maxY) newY = maxY;

  activeCube.style.left = newX + "px";
  activeCube.style.top = newY + "px";
});

document.addEventListener('mouseup', function () {
  if (activeCube) {
    activeCube.style.cursor = "grab";
  }
  activeCube = null;
});
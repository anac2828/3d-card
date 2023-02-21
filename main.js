const pre = document.querySelector('pre');

function rotateElement(event, element) {
  // get mouse position
  const x = event.clientX;
  const y = event.clientY;
  console.log(x, y);

  // find the middle
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  // get offset from middle in degrees
  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;

  element.style.setProperty('--rotateX', `${offsetY * -1}deg`);
  element.style.setProperty('--rotateY', `${offsetX}deg`);
}

document.addEventListener('mousemove', e => {
  rotateElement(e, pre);
});

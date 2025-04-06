// Завдання 1: Слайдер масштабу
const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

const updateImageScale = _.debounce((value) => {
  const scale = value / 50; 
  image.style.transform = `scale(${scale})`;
}, 100);

slider.addEventListener('input', (e) => {
  updateImageScale(e.target.value);
});

const box = document.getElementById('box');

const moveBox = _.debounce((x, y) => {
  box.style.left = x + 'px';
  box.style.top = y + 'px';
}, 10);

document.addEventListener('mousemove', (e) => {
  moveBox(e.clientX, e.clientY);
});

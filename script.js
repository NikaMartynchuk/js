// Завдання 1
const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`У списку ${categoryItems.length} категорії.`);

categoryItems.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('li').length;
    console.log(`Категорія: ${title}\nКількість елементів: ${elementsCount}`);
});

// Завдання 2
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];

const ingredientsList = document.querySelector('#ingredients');
const ingredientElements = ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    return li;
});

ingredientsList.append(...ingredientElements);

// Завдання 3
const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const gallery = document.querySelector('#gallery');
gallery.style.display = 'flex';
gallery.style.gap = '10px';
gallery.style.listStyle = 'none';

gallery.insertAdjacentHTML(
    'beforeend',
    images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="300"></li>`).join('')
);

// Завдання 4
let counterValue = 0;
const valueSpan = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
});

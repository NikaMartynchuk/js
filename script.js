   // Завдання 1
   document.getElementById("helloButton").onclick = () => alert("Hello World!");

   // Завдання 2
   const randomNumber = Math.floor(Math.random() * 100) + 1;
   document.getElementById("guessButton").onclick = () => {
       const userGuess = Number(document.getElementById("guessField").value);
       const result = document.getElementById("guessResult");
       if (userGuess === randomNumber) result.textContent = "Ви вгадали!";
       else if (userGuess < randomNumber) result.textContent = "Занадто мало!";
       else result.textContent = "Занадто багато!";
   };

   // Завдання 3
   let clickCounter = 0;
   document.body.onclick = () => {
       clickCounter++;
       document.getElementById("clickCount").textContent = clickCounter;
   };

   // Завдання 4
   const applyCallbackToEachElement = (arr, callback) => arr.map(callback);
   const numbers = [1, 2, 3, 4, 5];
   const square = (x) => x * x;
   console.log(applyCallbackToEachElement(numbers, square)); // [1, 4, 9, 16, 25]

   // Функція для розрахунку дисконтної ціни
   const calculateDiscountedPrice = (price, discount, callback) => {
       const discountedPrice = price - (price * discount / 100);
       callback(discountedPrice);
   };

   // Колбек-функція для виводу результату
   const showDiscountedPrice = (price) => {
       console.log(`Discounted price: ${price}`);
   };

   // Використання функції
   calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90

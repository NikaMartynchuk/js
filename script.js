  // Bank Account
  let balance = 1000;

  function deposit() {
      let amount = Number(document.getElementById('depositAmount').value);
      if (amount > 0) {
          balance += amount;
          document.getElementById('balance').textContent = balance;
          alert(`Рахунок поповнено. Ваш баланс: ${balance} грн`);
      } else {
          alert('Введіть правильну суму!');
      }
  }

  function withdraw() {
      let amount = Number(document.getElementById('withdrawAmount').value);
      if (amount > 0 && amount <= balance) {
          balance -= amount;
          document.getElementById('balance').textContent = balance;
          alert(`Гроші знято. Ваш баланс: ${balance} грн`);
      } else {
          alert('Недостатньо коштів або неправильна сума!');
      }
  }

  // Weather
  function checkTemperature() {
      let temperature = Number(document.getElementById('temperatureInput').value);
      let message;
      if (temperature < 0) {
          message = 'Температура нижче 0 градусів Цельсія';
      } else {
          message = 'Температура вище або рівна 0 градусів Цельсія';
      }
      document.getElementById('temperatureMessage').textContent = message;
  }

  // User
  const correctEmail = "test@example.com";
  const correctPassword = "12345";

  function login() {
      let email = document.getElementById('emailInput').value;
      let password = document.getElementById('passwordInput').value;

      if (email === correctEmail && password === correctPassword) {
          document.getElementById('loginMessage').textContent = 'Успішний вхід!';
      } else {
          document.getElementById('loginMessage').textContent = 'Невірний email або пароль.';
      }
  }

  // Movie
  function checkMovieRating() {
      let title = document.getElementById('movieTitle').value;
      let rating = Number(document.getElementById('movieRating').value);
      let message = `Фільм: ${title}, Рейтинг: ${rating}. `;
      if (rating > 8) {
          message += 'Рейтинг високий!';
      } else {
          message += 'Рейтинг низький.';
      }
      document.getElementById('movieMessage').textContent = message;
  }
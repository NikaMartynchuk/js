// bankAccount
const bankAccount = {
    ownerName: "Іван",
    accountNumber: "12345678",
    balance: 1000,
    deposit() {
        const amount = Number(document.getElementById('depositAmount').value);
        if (amount > 0) {
            this.balance += amount;
            document.getElementById('balanceInfo').textContent = `Баланс: ${this.balance} грн`;
        } else {
            alert("Введіть правильну суму!");
        }
    },
    withdraw() {
        const amount = Number(document.getElementById('withdrawAmount').value);
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            document.getElementById('balanceInfo').textContent = `Баланс: ${this.balance} грн`;
        } else {
            alert("Недостатньо коштів або неправильна сума!");
        }
    }
};

//  weather
const weather = {
    temperature: 0,
    isBelowZero() {
        return this.temperature < 0;
    }
};

function checkWeather() {
    weather.temperature = Number(document.getElementById('temperatureInput').value);
    const message = weather.isBelowZero()
        ? "Температура нижче 0 градусів Цельсія"
        : "Температура вище або рівна 0 градусів Цельсія";
    document.getElementById('weatherMessage').textContent = message;
}

// user
const user = {
    email: "",
    password: "",
    login() {
        const inputEmail = document.getElementById('emailInput').value;
        const inputPassword = document.getElementById('passwordInput').value;

        const correctEmail = "test@example.com";
        const correctPassword = "12345";

        if (inputEmail === correctEmail && inputPassword === correctPassword) {
            document.getElementById('loginMessage').textContent = "Успішний вхід!";
        } else {
            document.getElementById('loginMessage').textContent = "Невірний email або пароль.";
        }
    }
};

// movie
const movie = {
    title: "",
    rating: 0,
    isHighRating() {
        return this.rating > 8;
    }
};

function checkMovie() {
    movie.title = document.getElementById('movieTitle').value;
    movie.rating = Number(document.getElementById('movieRating').value);

    const message = `Фільм: ${movie.title}, Рейтинг: ${movie.rating}. ${
        movie.isHighRating() ? "Рейтинг високий!" : "Рейтинг низький."
    }`;
    document.getElementById('movieMessage').textContent = message;
}

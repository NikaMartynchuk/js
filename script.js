

// Task 1
const user = {
  name: 'Nika',
  hobby: 'art',
  premium: true,
};

user.mood = 'happy'

user.hobby = 'skydiving'

user.premium = false

for ( const key in user ) {
    console.log( key + ' : ' + user[key] );
}

const keys = Object.keys( user );


//Task 2
const sampleObj = { 
  name: "John",
  age: 30, 
  job: "developer" };

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps(sampleObj)); 



//Task 3
const employees = { 
  John: 50, 
  Ann: 75, 
  Mike: 100, 
  Sarah: 85 
};


function findBestEmployee(employees) {
  let maxTasks = 0;
  let bestEmployee = "";

  for (const [name, tasks] of Object.entries(employees)) {
    if (tasks > maxTasks) {
      maxTasks = tasks;
      bestEmployee = name;
    }
  }
  return bestEmployee;
}


console.log(findBestEmployee(employees)); 




//Task 4
const salaries = { 
  John: 500, 
  Ann: 750, 
  Mike: 1000 
};

function countTotalSalary(employees) {
  return Object.values(employees).reduce((total, salary) => total + salary, 0);
}
console.log(countTotalSalary(salaries));



//5
const products = [
  { name: "Laptop", price: 1500, quantity: 10 },
  { name: "Phone", price: 800, quantity: 20 },
  { name: "Tablet", price: 600, quantity: 15 },
];
function getAllPropValues(arr, prop) {
  const values = [];

  for (const item of arr) {
    if (prop in item) {
      values.push(item[prop]);
    }
  }

  return values;
}



console.log(getAllPropValues(products, "name"));
console.log(getAllPropValues(products, "price")); 
console.log(getAllPropValues(products, "quantity")); 
console.log(getAllPropValues(products, "color")); 


//Task 6
const product = [
  { name: "Laptop", price: 1500, quantity: 10 },
  { name: "Phone", price: 800, quantity: 20 },
  { name: "Tablet", price: 600, quantity: 15 },
];

function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      break; 
    }
  }

  return totalPrice;
}



console.log(calculateTotalPrice(product, "Phone")); 
console.log(calculateTotalPrice(product, "Tablet")); 
console.log(calculateTotalPrice(product, "Laptop")); 
console.log(calculateTotalPrice(product, "Monitor"));



//Task 7

const account = {
  balance: 0,
  transactions: [],

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push({ type: "deposit", amount });
      console.log(`Внесено: ${amount}. Баланс: ${this.balance}`);
    } else {
      console.log("Сума повинна бути більше нуля.");
    }
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостатньо коштів.");
    } else if (amount > 0) {
      this.balance -= amount;
      this.transactions.push({ type: "withdraw", amount });
      console.log(`Знято: ${amount}. Баланс: ${this.balance}`);
    } else {
      console.log("Сума повинна бути більше нуля.");
    }
  },

  getBalance() {
    console.log(`Баланс: ${this.balance}`);
    return this.balance;
  },

  getTransactions() {
    console.log("Транзакції:", this.transactions);
    return this.transactions;
  },
};

account.deposit(1000); 
account.withdraw(300); 
account.getBalance(); 
account.getTransactions();

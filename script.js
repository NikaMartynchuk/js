// const feedback = {
//     good : 5,
//     neutral : 10,
//     bad : 3
// }
// // for ( const key in feedback ) {
// //     console.log( key + ' : ' + feedback[key] );
// // }
// // 
// const keys = Object.keys( feedback );

// for ( let i = 0; i < keys.length; i++ ) {
//     console.log( keys[i] + ' : ' + feedback[keys[i]] );
// }

// // 

// const values = Object.values( feedback );
//  let total = 0;
// for ( let i = 0; i < values.length; i++ ) {
//     console.log( values[i] );
//     total += values[i];
//     console.log(parseInt( total/keys.legth ));

// }

// // 

// const entries = Object.entries( feedback );
// // console.log( entries );
// for ( let i = 0; i < entries.length; i++ ) {
//     console.log( entries[i][0] + ' : ' + entries[i][1] );
// }

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
// ];
// function findFriendByName(friends, friendName) {
//     for (let i = 0; i < friends.length; i++) {
//         if (friends[i].name === friendName) {
//             return friends[i]; 
//         }
//     }
//     return `Friend with name ${friendName} not found.`;
// }
// console.log(findFriendByName(friends, 'Poly')); 
// console.log(findFriendByName(friends, 'Chelsy')); 




// const a = { x: 1, y: 2}
// const b = a
// const c = { 
//     ...a
// }
// console.log(a === c) //false


// const a = { x: 1, y: 2, z: {a: 1, b: 2}}
// const b = a
// const c = { 
//     ...a
// }
// console.log(a.z === c.z) //true
// console.log(a === c) //false



// Деструктуризація об'єкта глибокої вкладеності

// let obj2 = {
//     name: 'John',
//     age: 25,
//     city : 'Kyiv',
//     address: {
//         street: 'Khreschatyk',
//         number: '10'
//     },
//     friends: ['Mike', 'Alex', 'Anna']
// };
// const {
//     name,
//     age,
//     city,
//       address: {street, number}, 
//       friends: [f1, f2, f3]
//     } = obj2;
//     console.log(name, age, city, street, number, f1, f2, f3);
// // John 25 Kyiv Khreschatyk 10 Mike Alex Anna


// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     features: ['power windows', 'rear camera', 'navigation'],
//     safety: {
//       airbags: true,
//       antilock_brakes: true,
//       stability_control: true
//     }
//   }

// const {
//     make,
//     model,
//     features: [f1, f2, f3],
//     safety: {
//       airbags,
//       antilock_brakes,
//       stability_control
//     }
//  } = car;
//     console.log( make, model, f1, f2, f3, airbags, antilock_brakes, stability_control);




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

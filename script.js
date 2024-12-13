// // function output(name){
// //     console.log('my name is ' + name)
// // }
// // output('Vitalii');
// // output('Vlad');

// // function output2(name){
// //     return('my name is ' + name)
// // }
// // output('Vitalii')
// // const value = output2('Oleg');
// // console.log(value);

// // const add = function(a, b, c){
// //     return a + b + c;
// // }

// // console.log(add(3, 5.666, 17))


// // const nums = [5, 10, 15];

// // function myAverageScore(numbers) {

// //     let sum = 0;
// //     for (let i = 0; i < numbers.length; i++) {
// //         sum += numbers[i]; 
// //     }

// //     return sum / numbers.length; 
// // }

// // console.log(myAverageScore(nums))



// // const withdraw = function (amount, balance) {
//     // if (myAverageScore(nums) === 0) {
//     //     console.log("Для проведення операції введіть суму більше нуля.");
//     // } else if (myAverageScore(nums) > balance) {
//     //     console.log("Недостатньо коштів на рахунку.");
//     // } else {
//     //     console.log("Операція зняття коштів проведена.");
//     // }
// // };

// // withdraw(0, 300); 
// // withdraw(500, 300); 
// // withdraw(100, 300); 

// function myAverageScore(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]; 
//     }

//     return sum / numbers.length; 
// }

// function getGrade(average) {
//     if (average >= 91 && average <= 100) {
//         return "A";
//     } else if (average >= 81 && average <= 90) {
//         return "B";
//     } else if (average >= 71 && average <= 80) {
//         return "C";
//     } else {
//         return "D";
//     }
// }

// console.log(myAverageScore([100, 75, 81, 96])); 
// console.log(getGrade(myAverageScore([100, 75, 81, 96]))); 

// console.log(myAverageScore([45, 63, 85, 70])); 
// console.log(getGrade(myAverageScore([45, 63, 85, 70]))); 

// console.log(myAverageScore([77, 82, 60, 58])); 
// console.log(getGrade(myAverageScore([77, 82, 60, 58]))); 

// console.log(myAverageScore([93, 99, 93, 96]));
// console.log(getGrade(myAverageScore([93, 99, 93, 96])));




// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

// function findLogin(logins, loginToFind) {
//     if (logins.includes(loginToFind)) {
//         return `Користувача ${loginToFind} знайдено.`
//     } else {
//         return `Користувача ${loginToFind} не знайдено.`
//     }
// }

// console.log(findLogin(logins, loginToFind))


//1
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  }
  
  logItems(['Mango', 'Poly', 'Ajax']);


  //2
  function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' '); 
    return words.length * pricePerWord; 
  }
  
  console.log(calculateEngravingPrice("Напиши скрипт підрахунку вартості", 10)); 
  console.log(calculateEngravingPrice("Гравіювання прикрас", 15));

  
  //3
  function findLongestWord(string) {
    const words = string.split(' '); 
    let longestWord = ''; 
  
    for (const word of words) { 
      if (word.length > longestWord.length) {
        longestWord = word; 
      }
    }
  
    return longestWord; 
  }
  
  console.log(findLongestWord("Напиши функцію пошуку найдовшого слова")); 


  //4

  function formatString(string) {
    const maxLength = 40; 
  
    if (string.length <= maxLength) {
      return string; 
    }
  
    return string.slice(0, maxLength) + '...';
  }
    
  console.log(formatString("Цей рядок значно довший і потребує обрізання, щоб відповідати умовам задачі")); 
  
  
  //5

  function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase(); 
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
  }
  
  console.log(checkForSpam("Get the best sale offers now!")); 
  console.log(checkForSpam("Important message for you"));
  console.log(checkForSpam("Beware of SPAM emails!"));


  //6

  let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число (або натисніть Cancel для завершення):");

  if (input === null) { 
    break;
  }

  const number = Number(input); 

  if (isNaN(number)) { 
    alert("Було введено не число, спробуйте ще раз.");
    continue;
  }

  numbers.push(number); 
}

if (numbers.length > 0) {
  for (const num of numbers) {
    total += num; 
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Масив чисел порожній.");
}



//7

const logins = ["User1", "Admin", "Guest", "SuperUser"];

function isLoginValid(login) {
  return login.length >= 4 && login.length <= 16;
}

function isLoginUnique(allLogins, login) {
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }

  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  }

  allLogins.push(login); 
  return "Логін успішно доданий!";
}

console.log(addLogin(logins, "NewUser"));
console.log(addLogin(logins, "Ad"));
console.log(addLogin(logins, "Admin")); 
console.log(addLogin(logins, "AnotherUser")); 

console.log(logins);

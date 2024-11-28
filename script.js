
//Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let numbers = [1, 2 ,3]
numbers[1] = 10
console.log(numbers)

//Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let row = [
    ["Ketrin", "Viktor"],
    ["Andrew", "Nika"],
    ["Sasha", "Ellie"]
]

row[3] = ["Vlad", "Timophey"]
console.log(row)


//Створити скрипт який поверне суму всіх чисел в масиві.
function sumArray(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num; 
    }
    return sum;
}

const array = [1, 2, 3, 4, 5];
console.log(sumArray(array));


//Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.

const number = [10, 20, 30, 40, 50];

for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}



// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
const strings = ["apple", "banana", "cat", "elephant", "dog"];

for (let str of strings) {
    if (str.length > 5) {
        console.log(str); 
    }
}


//Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

const dataArray = [14, 67, 23, 89, 35, 42, 90, 12, 76, 53];

let highestValue = dataArray[0]; 

for (let item of dataArray) {
    if (item > highestValue) {
        highestValue = item; 
    }
}

console.log("Максимальне значення в масиві:", highestValue);



//Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const numArra = [12, 7, 25, 40, 33, 18, 21, 50, 8, 19];

for (let currentNum of numArra) {
    if (currentNum % 2 === 0) { 
        console.log(currentNum); 
    }
}
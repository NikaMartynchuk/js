const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
for (let i = 0; i < friends.length; i++) {
  string += friends[i] + (i < friends.length - 1 ? ',' : '');
}
console.log(string); 



const friend = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
const str = friend.join(',');
console.log(str); 




const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];

const cardToRemove = 'Карточка-3';

const indexToRemove = cards.indexOf(cardToRemove);

if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
}

console.log(cards); 




const cardToInsert = 'Карточка-6';
const indexToInsert = 2; 

cards.splice(indexToInsert, 0, cardToInsert);

console.log(cards); 

const cardToUpdate = 'Карточка-4';
const newCard = ' Карточка-4';

const indexToUpdate = cards.indexOf(cardToUpdate);

if (indexToUpdate !== -1) {
  cards.splice(indexToUpdate, 1, newCard);
}

console.log(cards); 

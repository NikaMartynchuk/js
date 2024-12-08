const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
for (let i = 0; i < friends.length; i++) {
  string += friends[i] + (i < friends.length - 1 ? ',' : '');
}
console.log(string); 



const friend = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
const str = friend.join(',');
console.log(str); 




const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  

  const cardToRemove = 'Карточка-3';
  const cardToInsert = 'Карточка-6';
  const insertIndex = 2; 
  const cardToUpdate = 'Карточка-4';
  const updatedCardValue = 'Оновлена-Карточка-4';
  
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] === cardToRemove) {
      cards.splice(i, 1); 
      i--; 
    }
  
    if (cards[i] === cardToUpdate) {
      cards[i] = updatedCardValue; 
    }
  
    if (i === insertIndex - 1) { 
      cards.splice(insertIndex, 0, cardToInsert); 
      i++; 
    }
  }
  
  console.log(cards);
  
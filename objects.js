console.log('here is an object');

const str = 'Here is an object'

console.log(str.length);

const age = 23;
if (age !== 21) {
  console.log('have a beer')
} else {
  console.log('have a juicebox');
}

// Object Time

const ticket = {
  id: 1, 
  location: 'Baja Burrito',
  price: 1324,
  purpose: 'Lunch back when that was a thing',
  code: '100AB', 
}

const priceChecker = (expenseObject) => {
  if (expenseObject.price > 1500) {
    expenseObject.approved = false;
  } else {
    expenseObject.approved = true;
  }
  return expenseObject;
}

console.log(priceChecker(expense));

// const priceChecker = (expense) => {
  // if (expense.price > 1500) {
    // return expense.approved = false;
  // } else {
    // expense.approved = true;
  // };

// }
// console.log('expense object before, ', expense);

// expense.employeeNumber = 1001;

// console.log(expense.location);
// const keyIWantToUse = 'location';
// console.log(expense['location']);

// const newObj = {
  // id: 1,
// };

// const newerObj = {
  // id: 1,
// };

// console.log(newObj === newerObj);
const tickets = [
{
  id: 1, 
  location: 'Baja Burrito',
  date: '11/11/20'
  price: 1324,
  purpose: 'Lunch back when that was a thing',
  code: '100AB', 
}
{
  id: 2, 
  location: 'Baja Burrito',
  date: '11/12/20'
  price: 1324,
  purpose: 'Lunch back when that was a thing',
  code: '100AC', 
}
]

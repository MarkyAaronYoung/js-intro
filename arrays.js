console.log('arrays!');


const coolArray = ["Luke", "Matt", "Michael", "Jim", "Greg"];



const valueFinder =(arr, idx) => {
  return arr[idx];
};

console.log(valueFinder(coolArray, 1));


const isLuna = (arr) => {
  return arr.includes('Luna');
};

console.log(isLuna(['one', 2, 'Luna']));

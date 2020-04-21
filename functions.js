const chicken = 'chicken';
console.log(`processed ${chicken}`) 

const nuggatizer = (animal) => {
  return `function processed ${animal}`;
}

console.log(nuggatizer('chicken'));
console.log(nuggatizer('cow'));
console.log(nuggatizer('pig'));

const dogBreed = (breed) => {
  return `My favorite dog breed is ${breed.toUpperCase()}`;
}

console.log(dogBreed('pug'));
console.log(dogBreed('lab'));


const numb42 = (number) => {
  return number + 42;
}

console.log(numb42(12));

const futureAge = (birthYear) => {
  return 2099 - birthYear;
}

console.log(futureAge(1982));

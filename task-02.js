// Write a JavaScript code to get the even numbers from an array using any looping technique.

const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = [];

for (key in numbers) {
  const currentNumber = numbers[key];
  if (currentNumber % 2 === 0) {
    evenNumbers.push(currentNumber);
  }
}

console.log(evenNumbers);

// [12, 98, 76, 46]

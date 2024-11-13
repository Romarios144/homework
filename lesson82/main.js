function greet(name) {
  return `Hello "${name}"`;
}

console.log(greet("Roma"));

// ==============================================================

const numbers = [6, 17, 105, 2, 37, 28, 7, 74];

function bigNumbers(arr) {
  arr.forEach(number => {
    if (number > 10) {
      console.log(number);
    }
  });
}

bigNumbers(numbers);

// ==============================================================

function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case 'plus':
      result = num1 + num2;
      break;
    case 'minus':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
        result = num1 / num2;
      break;
  }

  return result;
}

let result = calculator(25, 10, 'minus');
console.log(result);

result = calculator(50, 20, 'plus');
console.log(result);

result = calculator(5, 5, 'multiply');
console.log(result);

result = calculator(100, 10, 'divide');
console.log(result);
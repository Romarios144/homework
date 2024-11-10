const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

for (let i = 0; i < numbers.length; i = i + 2) {
  console.log(numbers[i + 1])
}

const rainbow = ['red', 'orange', 'yellow', 'green','blue', 'indigo', 'violet']

for (let i = rainbow.length - 1; i >= 0; i--) {
  console.log(rainbow[i])
}
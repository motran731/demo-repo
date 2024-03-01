let index = 0;
while (index < 3) {
  console.log("I am great!");
  index++;
}

//Define a function fizzBuzz(max) that takes a number and prints every number from 0 to max (not inclusive) that is divisible by either 3 or 5, but not both.

function fizzBuzz(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
  }
}
fizzBuzz(18);

function fizzBuzzWhile(max) {
  let i = 0;
  while (i < max) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log(i);
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log(i);
    }
    i++;
  }
}

function fizzBuzzNested(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 3 === 0) {
      if (i % 5 !== 0) {
        console.log(i);
      }
    } else if (i % 5 === 0) {
      console.log(i);
    }
  }
}

//Write a function dynamicFizzBuzz that accepts three arguments (max, num1, and num2). The function should return an array containing positive numbers less than max that are divisible by num1 or num2, but not both

let dynamicFizzBuzz = function (max, num1, num2) {
  let nums = [];
  for (let i = 1; i < max; i++) {
    if (
      (i % num1 === 0 || i % num2 === 0) &&
      !(i % num1 === 0 && i % num2 === 0)
    ) {
      nums.push(i);
    }
  }
  return nums;
};

console.log(dynamicFizzBuzz(20, 3, 5)); // [ 3, 5, 6, 9, 10, 12, 18 ]
console.log(dynamicFizzBuzz(24, 4, 6)); // [ 4, 6, 8, 16, 18, 20 ]

//Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. The functions should return the smallest number that is divisible by both num1 and num2.
let leastCommonMultiple = function (num1, num2) {
  for (let i = 1; i <= num1 * num2; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      return i;
    }
  }
};

console.log(leastCommonMultiple(4, 6)); // 12

//Define a function isPrime(number) that returns true if number is prime. Otherwise, false. A number is prime if it is only divisible by 1 and itself.
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  let i = 2;
  while (i < number) {
    if (number % i === 0) {
      return false;
    }
    i++;
  }

  return true;
}

//Write a function isPerfectSquare that accepts a number as an argument. The method should return a boolean indicating whether or not the argument is a perfect square. A perfect square is a number that is the product of some number multiplied by itself. For example, since 64 = 8 * 8 and 144 = 12 * 12, 64 and 144 are perfect squares; 35 is not a perfect square.
function isPerfectSquare(number) {
  for (let i = 1; i <= number; i++) {
    if (i * i === number) {
      return true;
    }
  }
  return false;
}

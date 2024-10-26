const add = (a, b) => a + b;

console.log(add(3, 4));

// Exam 2

subtraction = function (a, b) {
  return a - b;
};
console.log(subtraction(44, 20));

// Exam3

const isEven = (num) => {
  if (num % 2 === 0) {
    return `${num} ლუწია`;
  } else {
    return `${num} კენტია`;
  }
};
console.log(isEven(5));

// Exam 4

function multiply(a, b, callback) {
  return callback(a, b);
}

function callBack(a, b) {
  return a * b;
}

console.log(multiply(6, 4, callBack));

// Exam 5

const isPositive = (num) => {
  if (num > 0) {
    return `${num} დადებითი რიცხვია`;
  } else {
    return `${num} უარყოფით რიცხვია`;
  }
};

console.log(isPositive(-4));

// Exam 6

doubledNum = function (num) {
  return num * 2;
};

console.log(doubledNum(4));

// Exam 7

function doubledNumFn(num, callback) {
  return callback(num);
}
function callBack(num) {
  return num * 2;
}

console.log(doubledNumFn(8, callBack));

// Exam 8

const isDivisibleByThree = (num) => {
  if (num % 3 === 0) {
    return `${num} იყოფა 3 ზე `;
  } else {
    return `${num} არ იყოფა 3 ზე`;
  }
};

console.log(isDivisibleByThree(21));

// Exam 9

function isNumEven(num, callback) {
  return callback(num);
}
function callBack(num) {
  if (num % 2 === 0) {
    return `${num} ლუწია `;
  } else {
    return `${num} კენტია`;
  }
}

console.log(isNumEven(6, callBack));

// Exam 10

const numCube = (num) => num * num * num;

console.log(numCube(3));

// Exam 11

function multiply2(num1, num2, callback) {
  return callback(num1, num2);
}
function callBack(num1, num2) {
  return num1 * num2;
}

console.log(multiply2(4, 6, callBack));

// Exam 12

const isGreaterThanZero = (num) => num > 0;

console.log(isGreaterThanZero(-2));

// Exam 13

anonymous = function (num) {
  return num / 2;
};

console.log(anonymous(12));

// Exam 14

function addNum(a, b, callback) {
  return callback(a, b);
}

function callBack(a, b) {
  return a + b;
}

console.log(addNum(3, 4, callBack));

// Exam 15

const square = (num) => num * num;

console.log(square(3));

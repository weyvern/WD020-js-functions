const Function = 'Hi';

const myself = 'Jorge';

console.log(Function);

// Named functions
function greeting() {
  return 'Hello there';
}

/* function greetingWithName(name = 'stranger') {
  console.log(`Hello there, ${name}`);
}
 */
const greetingWithName = (name = 'stranger') =>
  console.log(`Hello there, ${name}`);

function greetingWithNameAndTime(time = 'day', name = 'stranger') {
  console.log(`Good ${time}, ${name}`);
}

console.log(greeting());
greetingWithName('Carina');
greetingWithName(myself);
greetingWithName();
greetingWithNameAndTime();
greetingWithNameAndTime('afternoon', 'Zhi');

// Anonymous functions

document.querySelector('body').addEventListener('click', function () {
  console.log('clicked');
});

const callback = function () {
  console.log('Hello');
};

function mainFunction(cb) {
  cb();
}

mainFunction(callback);

// Recursion

const factorial = function (number) {
  if (number <= 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// This is what we want: 5 * 4 * 3 * 2 * 1
// 5 * factorial(4)
// 5 * (4 * factorial(3))
// 5 * (4 * (3 * factorial(2)))
// 5 * (4 * 3 * (2 * factorial(1))
// 5 * (4 * 3 * 2 * 1 * factorial(0))
// 5 * 4 * 3 * 2 * 1 * 1

console.log(factorial(5));

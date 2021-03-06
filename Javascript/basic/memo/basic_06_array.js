'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const balls = ['π', 'β½οΈ'];
console.log(balls);
console.log(balls.length);
console.log(balls[0]); // first value
console.log(balls[balls.length - 1]); // last value
console.log(balls[2]);

// 3. Looping over an array
// print all balls

// a. for
for (let i = 0; i < balls.length; i++) {
  console.log(balls[i]);
}

// b. for...of
for (let ball of balls) {
  console.log(ball);
}

console.clear();

// c. forEach
balls.forEach(function (ball, index, array) {
  console.log(ball, index, array); // λ³΄ν΅ arrayλ λ°μμ€μ§ μμ
});

balls.forEach((ball) => console.log(ball));

// 4. Addtion, deletion, copy

// push: add an item to the end
balls.push('π', 'π');
console.log(balls);

// pop: remove an item to the end
balls.pop();
console.log(balls);
balls.pop();
console.log(balls);

// unshift: add an item to the beginning
balls.unshift('π', 'π±', 'πΎ');
console.log(balls);

// shift: remove an item to the beginning
balls.shift('π');
console.log(balls);

// note !!
// shift, unshift are slower than pop, push

// splice: remove an item by index position
balls.splice(2, 1);
console.log(balls);
balls.splice(1);
console.log(balls);
balls.splice(0, 1, 'π', 'π±', 'πΎ');
console.log(balls);

//combine two arrays
const balls2 = ['π', 'π'];
const newBalls = balls.concat(balls2);
console.log(newBalls);

// 5. Searching
console.clear();
console.log(newBalls);

// indexOf : find the index
console.log(newBalls.indexOf('π'));
console.log(newBalls.indexOf('βΎοΈ')); // -1

// includes
console.log(newBalls.includes('π')); // boolean
console.log(newBalls.includes('βΎοΈ'));

// lastIndexOf
console.clear();
newBalls.push('πΎ');
console.log(newBalls);
console.log(newBalls.indexOf('πΎ')); // μ²μ λ°κ²¬νλ©΄ μ’λ£
console.log(newBalls.lastIndexOf('πΎ')); // μ²μ λ°κ²¬νλ©΄ μ’λ£

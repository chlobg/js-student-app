// 1. Arrays

// Create an array of 5 student names and print the third name

const students = ["Alice", "Olivier", "Ana", "Jean", "Marie"];
console.log(students[2]);

// 2. Array Methods

// Use .map() to square all elements in [1, 2, 3], use .filter() to find all names starting with "A", Use .reduce() to sum numbers in [5, 10, 15]

const numbers1 = [1, 2, 3];
const doubled = numbers1.map((num) => num * num);
console.log(doubled);

const events = students.filter((name) => name.startsWith("A"));
console.log(events);

const numbers2 = [5, 10, 15];
const total = numbers2.reduce((acc, curr) => acc + curr, 0);
console.log(total);

// 3. DOM Events (Form, Input, Click)

//Build a form to input tasks and show them as a list and add a button that clears all tasks => Made on javascripttraining.html

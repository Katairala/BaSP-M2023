console.log("--EXERCISE 3: ARRAYS");

/* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/
console.log("-Exercise 3.a:");

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Dicember",
];

console.log(months[4]);
console.log(months[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log("-Exercise 3.b:");

var orderMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Dicember",
];
var result = orderMonths.sort();

console.log(result);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log("-Exercise 3.c:");

var addMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Dicember",
];
addMonths.unshift("Hi");
addMonths.push("Bye");

console.log(addMonths);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log("-Exercise 3.d:");

var removeMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Dicember",
];
removeMonths.shift();
removeMonths.pop();

console.log(removeMonths);

// e. Invertir el orden del array (utilizar reverse).
console.log("-Exercise 3.e:");

var invertedMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Dicember",
];
var result = invertedMonths.reverse();

console.log(result);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log("-Exercise 3.f:");

var joinMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Dicember",
];
var result = joinMonths.join("-");

console.log(result);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
console.log("-Exercise 3.g:");

var copyMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Dicember",
];
var result = copyMonths.slice(4, 11);

console.log(result);

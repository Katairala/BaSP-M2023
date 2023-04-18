console.log("--EXERCISE 2: STRINGS");

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).*/
console.log("-Exercise 2.a:");

var str = "Hi in uppercase";
var result = str.toUpperCase();

console.log(result);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 
5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log("-Exercise 2.b:");

var secondStr = "This is a string";
var result = secondStr.substring(0, 5);

console.log(result);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 
3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log("-Exercise 2.c:");

var thirdStr = "This is a string";
var result = thirdStr.substring(13, 16);

console.log(result);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra 
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).*/
console.log("-Exercise 2.d:");

var string = "tHIS IS A STRING";
var secondString = string.substring(0, 1).toUpperCase();
var thirdString = string.substring(1).toLowerCase();
var result = secondString + thirdString;

console.log(result);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del 
primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log("-Exercise 2.e:");

var fourthString = "This is a string";
var result = fourthString.indexOf(" ");

console.log(result);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el 
operador +).*/
console.log("-Exercise 2.f:");

var fullName = "katherine airala";
var space = fullName.indexOf(" ");
var firstWord = fullName.substring(0, space);
var secondWord = fullName.substring(space + 1);
var result =
  firstWord[0].toUpperCase() +
  firstWord.substring(1).toLowerCase() +
  " " +
  secondWord[0].toUpperCase() +
  secondWord.substring(1).toLowerCase();

console.log(result);

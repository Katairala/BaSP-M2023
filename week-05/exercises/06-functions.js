/*console.log('--FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
console.log("-Exercise 6.a:");

function suma(a, b) {
  return a + b;
}
var result = suma(5, 3);

console.log(result);

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un
número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN
como resultado.*/
console.log("-Exercise 6.b:");

function secondSuma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("One of the parameters has an error.");
    return NaN;
  } else return a + b;
}

console.log(secondSuma(4, "word"));

/* c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.*/
console.log("-Exercise 6.c:");

function sumaInt(num) {
  if (typeof num !== "number" || num.toString().includes(".")) {
    return false;
  }
  return true;
}

console.log(sumaInt(8));
console.log(sumaInt(2.5));

/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que
valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número 
convertido a entero (redondeado).*/
console.log("-Exercise 6.d:");

function sumaInteger(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("One of the parameters has an error.");
    return NaN;
  }
  if (!validateInteger(a) || !validateInteger(b)) {
    alert("One of the numbers is not and integer.");
    return Math.round(a) + Math.round(b);
  }
  return a + b;
}
var result = sumaInteger(8, 2.5);
console.log(result);

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función
probando que todo siga funcionando igual que en el apartado anterior. */

console.log("-Exercise 6.e:");

function validateInteger(num) {
  if (typeof num !== "number" || num.toString().includes(".")) {
    return false;
  } else {
    return true;
  }
}

function integerSuma(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    alert("One of the parameters has an error.");
    return NaN;
  }
  if (!validateInteger(a) || !validateInteger(b)) {
    alert("One of the numbers is not an integer.");
    return Math.round(a) + Math.round(b);
  }
  return a + b;
}

var result = integerSuma(8, 2.5);
console.log(result);

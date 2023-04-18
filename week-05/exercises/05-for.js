console.log("--EXERCISE 5: FOR");

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
una alerta utilizando cada una de las palabras. */
console.log("-Exercise 5.a:");

var firstWords = ["Hi", "this", "is", "my", "array"];

for (var i = 0; i < firstWords.length; i++) {
  alert(firstWords[i]);
}

//b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
console.log("-Exercise 5.b:");

var secondWords = ["Hi", "this", "is", "my", "array"];
for (var i = 0; i < secondWords.length; i++) {
  var upperCase = secondWords[i].substring(0, 1).toUpperCase();
  var lowerCase = secondWords[i].substring(1);
  var result = upperCase + lowerCase;
  alert(result);
}

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la
cadena completa.*/
console.log("-Exercise 5.c:");

var words = ["Hi", "this", "is", "my", "array"];
var sentence = "";
for (var i = 0; i < words.length; i++) {
  sentence += words[i] + " ";
}

alert(sentence);

/* d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es
decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta
al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).*/
console.log("-Exercise 5.d:");

var result = [];
for (var i = 0; i < 10; i++) {
  result.push(i);
}

console.log(result);

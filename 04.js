/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  
  var numString = num.toString(); // Nota: como a los argumentos que tienen en su interior números no se les
                                  // puede aplicar la propiedad length, se utiliza .toString que lo convierte en un arreglo
 var longitud = numString.length; // Nota: se busca medir la longitud del arreglo, porque como ya no son números Ej 11711;
                                  // sino, once once site once once.
 for(var i = 0; i < Math.floor(longitud / 2); i++){ // Como lo que se quiere es analizar que los dos primeros números coincidan
                                                    // con los dos últimos, para que se cumpla la condición de que es un # simétrico
                                                    // se parte entonces el arreglo por la mitad, pero como el resultado da 2.5 al ser 
                                                    // decimal JS no lo toma entonces se utilizar el método Math.floor para que redondee el valor
                                                    // en 2
 if(numString[i] !== numString[longitud - 1 -i]){   // El condicional quiere decir que empieza a compara el 1 de la izquierda con el 1 de la derecha,
                                                    // así continua hasta llegar a 2 y se detiene, porque es la condición del for. Si no encuentra coincidencia agrega false y sino true   
  return false;                                     // !== porque la pregunta es en este caso, cales son los números diferentes antes y después de la mitad (11(7)11)
 }                                                   

 }
 return true;                                                                  
}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico
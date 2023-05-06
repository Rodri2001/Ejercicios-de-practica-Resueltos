/*
¡Por supuesto! Aquí te dejo un ejercicio sencillo de JavaScript para que resuelvas:
Crea una función llamada "sumarNumeros" que tome dos parámetros numéricos y devuelva
la suma de esos dos números. Luego, llama a la función con dos números de tu elección e imprime el resultado en la consola.
Puedes comenzar escribiendo el esqueleto de la función y luego llenarlo con el código necesario para hacer la suma y devolver
el resultado. ¡Buena suerte!¡Por supuesto! Aquí te dejo un ejercicio sencillo de JavaScript para que resuelvas:
Crea una función llamada "sumarNumeros" que tome dos parámetros numéricos y devuelva la suma de esos dos números.
Luego, llama a la función con dos números de tu elección e imprime el resultado en la consola.
Puedes comenzar escribiendo el esqueleto de la función y luego llenarlo con el código necesario para hacer la suma y devolver el resultado.
¡Buena suerte!
 */

function sumarNumeros(x, y) {
    //Escribe tu codigo
}

/**
Ejercicio:
Escribe una función llamada esPar que tome como parámetro un número y devuelva true si es par o false si es impar.
 */

function esPar(numero) {
    // Escribe tu código aquí
}


/*
ejercicio de JavaScript para resolver:
Escribe una función llamada "esPrimo" que tome un número como parámetro y devuelva true si el número es primo o false si no lo es.
Recuerda que un número es primo si sólo es divisible por 1 y por sí mismo. Puedes empezar escribiendo el esqueleto de la función
y luego llenarlo con el código necesario para determinar si el número es primo o no. ¡Buena suerte!
 */
/*
¿Qué son los números primos? Los números primos son aquellos que solo son divisibles entre ellos mismos y el 1,
es decir, que si intentamos dividirlos por cualquier otro número, el resultado no es entero.
*/
function esPrimo(num) {
    // Escribe tu codigo
}


/*
 * Completa la función 'simpleArraySum' a continuación.
 *
 * Se espera que la función devuelva un entero.
 * La función acepta entero_arreglo ar como parámetro.
 */

/**
 * 
 * @param {Array} datos Almacena numeros para sumarlos en ar 
 */

function simpleArraySum(ar) {
    // Escribe tu codigo
}

/**
La tarea es crear una función que reciba dos argumentos: el número "x" y "n", donde "x" 
es el número del que queremos obtener los múltiplos y "n" 
es la cantidad de múltiplos que deseamos obtener.

La función debe retornar un arreglo o lista 
(dependiendo del lenguaje de programación que estés utilizando)
 con los primeros "n" múltiplos de "x". Por ejemplo, si "x" es igual a 3 y "n" es igual a 5, 
la función debería retornar un arreglo con los primeros 5 múltiplos de 3, que son 3, 6, 9, 12, y 15.
 */

function countBy(x, n) {
// escribe tu codigo abajo
}

/*
La tarea es crear una funcion que reciba un argumento: el numero "num" donde "num"
va a recibir numeros positivos o negativos , la idea es que si le pasan numeros positivos 
los transoforme en negativos , y si son negativos los deje en negativos .
el 0 no puede ser negativo 
 */
function negativos (num){
//Escribe tu codigo abajo de esta linea
}



/*
En este sencillo ejercicio, construirás un programa que toma un valor,
integer , y devuelve una lista de sus múltiplos hasta otro valor, limit .
Si límite es un múltiplo de entero, debe ser incluido también. Sólo habrá enteros positivos pasados a la función,
que no consistan en 0. El límite siempre será mayor que la base.
*/
function findMultiples(integer, limit) {
    //Escribe tu codigo 
  }

//
  function solution(A) {
// escribe tu codigo abajo
  }

module.exports = {
    sumarNumeros,
    esPrimo,
    simpleArraySum,
    esPar,
    countBy,
    solution,
    negativos,
    findMultiples,

}
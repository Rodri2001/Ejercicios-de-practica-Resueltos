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
  return x + y
}


/**
Ejercicio:
Escribe una función llamada esPar que tome como parámetro un número y devuelva true si es par o false si es impar.
 */

function esPar(numero) {
  // Escribe tu código aquí
  if (numero % 2 === 0) {
    return true
  } else
    if (numero % 2 === 1) {
      return false
    }
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
  // Si el número es menor que 2, no puede ser primo
  if (num < 2) {
    return false;
  }
  // Itera sobre todos los números desde 2 hasta la mitad del número dado
  for (let i = 2; i <= num / 2; i++) {
    // Si el número es divisible por algún número en este rango, no es primo
    if (num % i === 0) {
      return false;
    }
  }
  // Si el bucle se ejecuta sin encontrar un divisor, el número es primo
  return true;
}


/*
 * Completa la función 'simpleArraySum' a continuación.
 *
 * Se espera que la función devuelva un entero.
 * La función acepta entero_arreglo ar como parámetro.
 */

function simpleArraySum(ar) {
  // Escribe tu codigo
  if (!ar.length) {
    return 0
  } else
    if (ar.length) {
      const res = ar.reduce((acumulador, item) => {
        return acumulador = acumulador + item
      }, 0)
      return res
    }
}
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

/*
La tarea es crear una funcion que reciba un argumento: el numero "num" donde "num"
va a recibir numeros positivos o negativos , la idea es que si le pasan numeros positivos 
los transoforme en negativos , y si son negativos los deje en negativos .
el 0 no puede ser negativo 
*/
function negativos(num) {
  if (num === 0) {
    return 0
  } else
    if (num > 0) {
      return num * -1
    }
  return num
}

// Alice y Bobo tienen un array con 3 numeros dentros
// Si los alice tiene numeros mas grandes recibe un punto
// Si los de bob tiene numeros mas grandes recibe un punto

function compareTriplets(a, b) {
  let alicepoint = 0;
  let bobpoint = 0;
  for(let i = 0; i < a.length; i++){
  if(a[i] > b[i]){ alicepoint++}
  else if(a[i] < b[i]){ bobpoint++}
  }
  return [alicepoint , bobpoint]
  }


/*
En este sencillo ejercicio, construirás un programa que toma un valor,
integer , y devuelve una lista de sus múltiplos hasta otro valor, limit .
Si límite es un múltiplo de entero, debe ser incluido también. Sólo habrá enteros positivos pasados a la función,
que no consistan en 0. El límite siempre será mayor que la base.
*/

function findMultiples(integer, limit) {
  // Escrbie tu codigo 
  let result = []; // Se inicializa una variable "result" como un array vacío donde se guardarán los múltiplos.
  for (let i = integer; i <= limit; i += integer) { // Se inicia un bucle "for" con la variable "i" iniciando en "integer", aumentando en "integer" en cada iteración, y deteniéndose cuando "i" es mayor que "limit".
    result.push(i); // En cada iteración, se agrega el valor de "i" al array "result".
  }
  return result; // Se devuelve el array "result" con los múltiplos encontrados.
}


/**
 * dado un array A de N enteros, devuelva el menor entero positivo (mayor que 0) que no aparezca en A.
 * N es un número entero dentro del intervalo [1..100.000];
cada elemento de la matriz A es un número entero dentro del intervalo [-1.000.000..1.000.000].
 */
// dato adicional : esta funcion puede llegar a ser tomada en una entrevista
function solution(A) {
  A.sort((a, b) => a - b); // ordena el arreglo en orden ascendente
  let smallestPositive = 1;

  // itera sobre el arreglo y encuentra el entero positivo más pequeño que no está en A
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0 && A[i] === smallestPositive) {
      smallestPositive++;
    } else if (A[i] > smallestPositive) {
      break; // hemos encontrado el entero positivo más pequeño que no está en A
    }
  }

  return smallestPositive;
}









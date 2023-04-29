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



}





module.exports = {
    sumarNumeros, esPrimo, simpleArraySum
}
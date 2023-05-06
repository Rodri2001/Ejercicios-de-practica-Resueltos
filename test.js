/*
En este sencillo ejercicio, construirás un programa que toma un valor,
integer , y devuelve una lista de sus múltiplos hasta otro valor, limit .
Si límite es un múltiplo de entero, debe ser incluido también. Sólo habrá enteros positivos pasados a la función,
que no consistan en 0. El límite siempre será mayor que la base.
*/

function findMultiples(integer, limit) {
  //Escribe tu codigo 
  let boxInteger = []
for(let i = 0; i <= integer; i++){
  for(let j = 1; j <= limit; i--){
   if(Number.isInteger(integer[i])){
    return boxInteger.push(integer[i])
   }
  }
  
}
  
}
console.log(findMultiples(2,6))
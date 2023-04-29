const {
   sumarNumeros,
   esPrimo,
   simpleArraySum
} = require('../src/index.js')


describe('Add Numers', function () {
   test('should add up the numbers', function () {
      expect(typeof sumarNumeros(2, 3)).toBe("number")
   })
})

describe('esPrimo', () => {
   it('should return true for prime numbers', () => {
      expect(esPrimo(2)).toBe(true);
      expect(esPrimo(3)).toBe(true);
      expect(esPrimo(5)).toBe(true);
      expect(esPrimo(7)).toBe(true);
      expect(esPrimo(11)).toBe(true);
   });

   it('should return false for non-prime numbers', () => {
      expect(esPrimo(4)).toBe(false);
      expect(esPrimo(6)).toBe(false);
      expect(esPrimo(8)).toBe(false);
      expect(esPrimo(9)).toBe(false);
      expect(esPrimo(10)).toBe(false);
   });
});

describe('simpleArraySum', () => {
   it('debería sumar los elementos de un arreglo de números', () => {
      expect(simpleArraySum([1, 2, 3, 4, 5])).toBe(15);
      expect(simpleArraySum([1, -2, 3, -4, 5])).toBe(3);
      expect(simpleArraySum([-1, -2, -3, -4, -5])).toBe(-15);
   });

   it('debería devolver 0 para un arreglo vacío', () => {
      expect(simpleArraySum([])).toBe(0);
   });
});

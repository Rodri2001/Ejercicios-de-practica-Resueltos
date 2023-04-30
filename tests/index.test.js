const {
   sumarNumeros,
   esPrimo,
   simpleArraySum, 
   esPar,
} = require('../src/index.js')


describe('Add Numers', function () {
   test('should add up the numbers', function () {
      expect(typeof sumarNumeros(2, 3)).toBe("number")
   })
})

describe('esPar',() =>{
   it('should return true if they are multiples of two', () => {
      expect(esPar(2)).toBe(true)
      expect(esPar(4)).toBe(true)
      expect(esPar(6)).toBe(true)
   })

   it('should return false if they are not multiples of two',() => {
      expect(esPar(1)).toBe(false)
      expect(esPar(3)).toBe(false)
      expect(esPar(5)).toBe(false)
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
   it('should sum the elements of a number array', () => {
      expect(simpleArraySum([1, 2, 3, 4, 5])).toBe(15);
      expect(simpleArraySum([1, -2, 3, -4, 5])).toBe(3);
      expect(simpleArraySum([-1, -2, -3, -4, -5])).toBe(-15);
   });

   it('should return 0 for an empty array', () => {
      expect(simpleArraySum([])).toBe(0);
   });
});

const {
   sumarNumeros,
   esPrimo,
   simpleArraySum,
   esPar,
   countBy,
   solution,
   negativos,
   findMultiples,
   compareTriplets,
   reverse
} = require('../src/index.js')


xdescribe('Add Numers', function () {
   test('should add up the numbers', function () {
      expect(typeof sumarNumeros(2, 3)).toBe("number")
   })
})

xdescribe('esPar', () => {
   it('should return true if they are multiples of two', () => {
      expect(esPar(2)).toBe(true)
      expect(esPar(4)).toBe(true)
      expect(esPar(6)).toBe(true)
   })

   it('should return false if they are not multiples of two', () => {
      expect(esPar(1)).toBe(false)
      expect(esPar(3)).toBe(false)
      expect(esPar(5)).toBe(false)
   })
})

xdescribe('esPrimo', () => {
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

xdescribe('simpleArraySum', () => {
   it('should sum the elements of a number array', () => {
      expect(simpleArraySum([1, 2, 3, 4, 5])).toBe(15);
      expect(simpleArraySum([1, -2, 3, -4, 5])).toBe(3);
      expect(simpleArraySum([-1, -2, -3, -4, -5])).toBe(-15);
   });

   it('debe retornar 0 cuando el arreglo este vacio', () => {
      expect(simpleArraySum([])).toBe(0);
   });
});

xdescribe('countBy', () => {
   it('debe devolver un array con los primeros "n" múltiplos de "x"', () => {
      expect(countBy(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(countBy(2, 5)).toStrictEqual([2, 4, 6, 8, 10]);
   })
})

xdescribe("solution", () => {
   test("debe devolver 1 si el arreglo no contiene enteros positivos", () => {
      const A = [-1, -3];
      expect(solution(A)).toBe(1);
   });

   test("debe devolver el entero positivo más pequeño que no está en el arreglo", () => {
      const A = [1, 3, 6, 4, 1, 2];
      expect(solution(A)).toBe(5);
   });

   test("debe devolver 1 si el arreglo solo contiene el número 0", () => {
      const A = [0];
      expect(solution(A)).toBe(1);
   });

   test("debe devolver 1 si el arreglo contiene solo 1 elemento y es negativo", () => {
      const A = [-5];
      expect(solution(A)).toBe(1);
   });

   test("debe devolver 2 si el arreglo contiene solo 1 elemento y es 1", () => {
      const A = [1];
      expect(solution(A)).toBe(2);
   });

   test("debe devolver 2 si el arreglo contiene dos elementos y el menor es 1", () => {
      const A = [1, 3];
      expect(solution(A)).toBe(2);
   });

   test("debe devolver 1 si el arreglo contiene dos elementos y el menor es negativo", () => {
      const A = [-3, -1];
      expect(solution(A)).toBe(1);
   });
});

xdescribe('Numeros Negativos', () => {
   it('debe transformar el numero en negativo', () => {
      expect(negativos(9)).toBe(-9)
   })
   it('No puede transformar el 0 en negativo', () => {
      expect(negativos(0)).toBe(0)
   })
   it('Debe mantenerse en negativo', () => {
      expect(negativos(-9)).toBe(-9)
   })
})


xdescribe('findMultiples', () => {
   it('debe devolver una lista de sus múltiplos', () => {
      expect(findMultiples(2, 6)).toStrictEqual([2, 4, 6])
   })
})

xdescribe('compareTriplets', () => {
   it('debe devolver [1, 1] cuando a = [1, 2, 3] y b = [3, 2, 1]', () => {
      const a = [1, 2, 3];
      const b = [3, 2, 1];
      const expected = [1, 1];

      const result = compareTriplets(a, b);

      expect(result).toEqual(expected);
   });
});

describe('reverse',()=>{
   it('deberia dar vuelta un arreglo sin usar reverse',()=>{
      expect(reverse([1,2,3])).toStrictEqual([3,2,1])
      expect(reverse([6,2,1])).toStrictEqual([1,2,6])
   })
})
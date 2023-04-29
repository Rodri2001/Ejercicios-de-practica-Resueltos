const {sumarNumeros} = require('../src/index.js')


describe('Add Numers',function(){
   it('should add up the numbers', function(){
    expect(typeof sumarNumeros(2,3)).toBe("number")
   })
})

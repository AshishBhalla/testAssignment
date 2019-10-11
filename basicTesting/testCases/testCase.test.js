const { add, square} =  require('../app');
const assert = require('chai').assert;

// it('it should add 2 numbers',() =>{
//     let result = add(2,5);
//     if(result !== 5){
//         throw new Error(`Expected 5 got ${result}`);
//     }
// })

// it('it should square a numbers', () => {
//     let result = square(2);
//     if (result !== 4) {
//         throw new Error(`Expected 4 got ${result}`);
//     }
// })

// nodemon --exec "npm test"
// "test-watch" : "nodemon --exec \"npm test\""
// npm run test-watch

describe('Test app',() =>{
    it('it should add 2 numbers',() =>{
        assert.equal(add(2,3),5)
    })
    it('it should square 2 numbers', () => {
        assert.equal(square(2), 4)
    })
})
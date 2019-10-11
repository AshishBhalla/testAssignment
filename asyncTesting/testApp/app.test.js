const {getInput1} = require('../app/app');
const assert = require('chai').assert;
const should = require('chai').should();


describe('App',() =>{
    it('it should give first and last name' ,(done) =>{
        getInput1(result =>{
            assert.equal(result,'Ashish Bhalla')
            done();
        })
        }
    )
    it('it should give string as type', (done) => {
        getInput1(result => {
            assert.typeOf(result, 'string')
            done();
        })
    }
    )
    it('it should give string as type', (done) => {
        getInput1(result => {
            result.should.be.a('string');
            done();
        })
    }
    )
})


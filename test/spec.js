const locate = require( '../index' );
const chai = require( 'chai' );
const should = chai.should();
const expect = chai.expect;

describe('Multidimensional Array Search', function() {
  it('should return a boolean', function() {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const result = locate(array, 'a');
    result.should.be.a('boolean');
  });

  it('should return false if item is not found', function() {
    const array = ['a', 'b', ['c', ['d'], ['e']]];
    const result = locate(array, 'f');
    result.should.be.false;
  });

  it('should return true if item is found', function() {
    const array = ['a', ['b'], 'c', ['d'], ['e']];
    const result = locate(array, 'e');
    result.should.be.true;
  });

  it('should return true even with nested arrays', function() {
    const array = ['a', 'b', ['c', ['d'], ['e']]];
    const result = locate(array, 'e');
    result.should.be.true;
  });
});

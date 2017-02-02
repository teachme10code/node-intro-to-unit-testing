const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function() {

  it('should return "fizz-buzz" when 30 is passed in', function() {
      const answer = fizzBuzzer(30);
      answer.should.equal("fizz-buzz");
  });
  
  it('should return "fizz" when 3 is passed in', function() {
      const answer = fizzBuzzer(3);
      answer.should.equal("fizz");
  });
  
  it('should return "buzz" when 200 is passed in', function() {
      const answer = fizzBuzzer(200);
      answer.should.equal("buzz");
  });
  
  it('should return 4 when the number 4 is passed in', function() {
      const answer = fizzBuzzer(4);
      answer.should.equal(4);
  });

  it('should raise error if args not numbers', function() {
    const badInputs = [
      ['test', undefined]
    ];
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });
});

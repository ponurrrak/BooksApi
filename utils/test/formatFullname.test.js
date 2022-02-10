const expect = require('chai').expect;
const formatFullname = require('../formatFullname.js');

describe('formatFullname', () => {

  it('should return an error if arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if arg doesn\'t contain both first and last name and nothing more', () => {
    expect(formatFullname('')).to.equal('Error');
    expect(formatFullname(' ')).to.equal('Error');
    expect(formatFullname('john')).to.equal('Error');
    expect(formatFullname(' doe')).to.equal('Error');
    expect(formatFullname('john ')).to.equal('Error');
    expect(formatFullname('john doe test')).to.equal('Error');
  });

  it('should return properly formatted output', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('John Doe')).to.equal('John Doe');
    expect(formatFullname('jOHN dOE')).to.equal('John Doe');
    expect(formatFullname('jOHn dOE')).to.equal('John Doe');
  });

});

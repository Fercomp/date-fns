var eachDay = require('../each_day');

describe('eachDay', function() {
  it('returns array of dates within specefied range', function() {
    var result = eachDay(
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 12)
    );
    expect(result).to.be.eql([
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ]);
  });

  it('accepts strings', function() {
    var result = eachDay(
      new Date(2014, 9 /* Oct */, 6).toISOString(),
      new Date(2014, 9 /* Oct */, 12).toISOString()
    );
    expect(result).to.be.eql([
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ]);
  });

  it('accepts timestamp', function() {
    var result = eachDay(
      new Date(2014, 9 /* Oct */, 6).getTime(),
      new Date(2014, 9 /* Oct */, 12).getTime()
    );
    expect(result).to.be.eql([
      new Date(2014, 9 /* Oct */, 6),
      new Date(2014, 9 /* Oct */, 7),
      new Date(2014, 9 /* Oct */, 8),
      new Date(2014, 9 /* Oct */, 9),
      new Date(2014, 9 /* Oct */, 10),
      new Date(2014, 9 /* Oct */, 11),
      new Date(2014, 9 /* Oct */, 12)
    ]);
  });
});

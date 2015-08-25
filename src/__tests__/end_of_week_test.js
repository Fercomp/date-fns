var endOfWeek = require('../end_of_week');

describe('endOfWeek', function() {
  it('returns date with time setted to 00:00:00 and date setted to first day in month', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    var result = endOfWeek(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
    );
  });

  it('allows to pass when a week starts', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    var result = endOfWeek(date, 1);
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999)
    );
  });

  it('accepts string', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).toISOString();
    var result = endOfWeek(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
    );
  });

  it('accepts timestamp', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    var result = endOfWeek(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999)
    );
  });

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfWeek(date);
    expect(date).to.be.eql(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  });

  describe('edge cases', function() {
    context('when current day value is less than start of week', function() {
      it('it returns end of week', function() {
        var date = new Date(2014, 9 /* Oct */, 6);
        var result = endOfWeek(date, 3);
        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 7, 23, 59, 59, 999));
      });
    });

    context('when current day value is equal to start of week', function() {
      it('it returns end of week', function() {
        var date = new Date(2014, 9 /* Oct */, 8);
        var result = endOfWeek(date, 3);
        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999));
      });
    });

    context('when current day value is bigger than start of week', function() {
      it('it returns end of week', function() {
        var date = new Date(2014, 9 /* Oct */, 10);
        var result = endOfWeek(date, 3);
        expect(result).to.be.eql(new Date(2014, 9 /* Oct */, 14, 23, 59, 59, 999));
      });
    });

    context('with end of year', function() {
      var date = new Date(2014, 11 /* Dec */, 29);
      var result = endOfWeek(date, 5);
      expect(result).to.be.eql(new Date(2015, 0 /* Jan */, 1, 23, 59, 59, 999));
    });
  });
});

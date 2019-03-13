import { Input, yearCalc, monthCalc, daysCalc } from '../src/backEnd.js';



describe('dateCheck', function() {
  it('should check to make sure input is a valid date', function() {
    const newInput = new Input(10, 7, 1998);
    expect(newInput.day).toBeGreaterThan(0);
    expect(newInput.day).toBeLessThan(32);
    expect(newInput.month).toBeGreaterThan(-1);
    expect(newInput.month).toBeLessThan(12);
    expect(newInput.year).toBeGreaterThan(0);
  });
});

describe('yearCalculate', function() {
  it('should return the number of days up to the current year', function() {
    const newInput = new Input(10, 7, 1998);
    let yearDays = yearCalc(newInput);
    expect(yearDays).toEqual(jasmine.any(Number));
  });
});

describe('monthsCalculate', function() {
  it('should return the number of months up to the current month', function() {
    const newInput = new Input(10, 7, 1998);
    let monthDays = monthCalc(newInput);
    expect(monthDays).toEqual(jasmine.any(Number));
  });
});

describe('daysCalculate', function() {
  it('should add the number of days from previous functions together and return a weekday', function() {
    const newInput = new Input(10, 7, 1998);
    const yearDays = 729404;
    const monthDays = 212;
    let days = daysCalc(newInput, yearDays, monthDays);
    expect(days).toMatch("Friday");
  });
});

import { Input, lifeLeft, dayAge, daysLeft, mercuryAge, lifeLeftOnMercury } from '../src/backEnd.js';

describe('age', function() {
  it('should take users age and not change it', function() {
    const newInput = new Input(19);
    expect(newInput.age).toEqual(19);
  });
});

describe('lifeLeft', function() {
  it('should subtract age from 79', function() {
    const newInput = new Input(19);
    let lifeYears = lifeLeft(newInput);
    expect(lifeYears).toEqual(60);
  });
});

describe('dayAge', function() {
  it('should find days in life', function() {
    const newInput = new Input(19);
    let days = dayAge(newInput);
    expect(days).toEqual(6935);
  });
});

describe('daysLeft', function() {
  it('should find days left in life', function() {
    const newInput = new Input(19);
    let days = daysLeft(newInput);
    expect(days).toEqual(21900);
  });
});

describe('mercuryAge', function() {
  it('should find age in years on mercury', function() {
    const newInput = new Input(19);
    let days = mercuryAge(newInput);
    expect(days).toEqual(79);
  });
});

describe('lifeLeftOnMercury', function() {
  it('should find years left on mercury', function() {
    const newInput = new Input(19);
    let years = lifeLeftOnMercury(newInput);
    expect(years).toEqual(249);
  });
});

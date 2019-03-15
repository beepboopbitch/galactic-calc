import { Input, lifeLeft, dayAge, daysLeft } from '../src/backEnd.js';

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

describe('dayAge', function() {
  it('should find days left in life', function() {
    const newInput = new Input(19);
    let days = daysLeft(newInput);
    expect(days).toEqual(21900);
  });
});

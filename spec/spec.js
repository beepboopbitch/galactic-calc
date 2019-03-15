import { Input, lifeLeft, dayAge, daysLeft, mercuryAge, lifeLeftOnMercury, venusAge, lifeLeftOnVenus, marsAge, lifeLeftOnMars, jupiterAge, lifeLeftOnJupiter } from '../src/backEnd.js';

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

describe('venusAge', function() {
  it('should find age in years on venus', function() {
    const newInput = new Input(19);
    let days = venusAge(newInput);
    expect(days).toEqual(31);
  });
});

describe('lifeLeftOnVenus', function() {
  it('should find years left on venus', function() {
    const newInput = new Input(19);
    let years = lifeLeftOnVenus(newInput);
    expect(years).toEqual(97);
  });
});

describe('marsAge', function() {
  it('should find age in years on mars', function() {
    const newInput = new Input(19);
    let days = marsAge(newInput);
    expect(days).toEqual(10);
  });
});

describe('lifeLeftOnMars', function() {
  it('should find years left on mars', function() {
    const newInput = new Input(19);
    let years = lifeLeftOnMars(newInput);
    expect(years).toEqual(32);
  });
});

describe('jupiterAge', function() {
  it('should find age in years on jupiter', function() {
    const newInput = new Input(19);
    let days = jupiterAge(newInput);
    expect(days).toEqual(2);
  });
});

describe('lifeLeftOnJupiter', function() {
  it('should find years left on jupiter', function() {
    const newInput = new Input(19);
    let years = lifeLeftOnJupiter(newInput);
    expect(years).toEqual(5);
  });
});

// describe('lifeLeft', function() {
//   it('should show venus age', function() {
//     const newInput = new Input(19, "venus");
//     let lifeYears = planetSelector(newInput);
//     expect(lifeYears).toEqual(60);
//   });
// });

//Testing
function Input(age, planet, planetAge){
  this.age = age;
  this.planet = planet;
  this.planetAge = planetAge;
}

function lifeLeft(life){
  const remainingLife = (79 - life.age);
  return remainingLife;
}

function dayAge(life){
  const daysInLife = (life.age * 365);
  return daysInLife;
}

function daysLeft(life){
  const daysRemaining = ((79 - life.age) * 365);
  return daysRemaining;
}

//Mercury calculations
function mercuryAge(life){
  const ageOnMercury = ((life.age * 365) / 88);
  return Math.round(ageOnMercury);
}

function lifeLeftOnMercury(life){
  const timeLeftOnMercury = (((79 - life.age) * 365) / 88);
  return Math.round(timeLeftOnMercury);
}

//Venus calculations
function venusAge(life){
  const ageOnMercury = ((life.age * 365) / 225);
  return Math.round(ageOnMercury);
}

function lifeLeftOnVenus(life){
  const timeLeftOnMercury = (((79 - life.age) * 365) / 225);
  return Math.round(timeLeftOnMercury);
}

//Mars calculations
function marsAge(life){
  const ageOnMercury = ((life.age * 365) / 687);
  return Math.round(ageOnMercury);
}

function lifeLeftOnMars(life){
  const timeLeftOnMercury = (((79 - life.age) * 365) / 687);
  return Math.round(timeLeftOnMercury);
}

//Jupiter calculations
function jupiterAge(life){
  const ageOnMercury = ((life.age * 365) / 4300);
  return Math.round(ageOnMercury);
}

function lifeLeftOnJupiter(life){
  const timeLeftOnMercury = (((79 - life.age) * 365) / 4300);
  return Math.round(timeLeftOnMercury);
}

function planetSelector(life) {
  if(life.planet === "venus"){
    life.planetAge = venusAge(life.age);
  }
  return life.planetAge;
}



export { Input, lifeLeft, dayAge, daysLeft, mercuryAge, lifeLeftOnMercury, venusAge, lifeLeftOnVenus, marsAge, lifeLeftOnMars, jupiterAge, lifeLeftOnJupiter, planetSelector }

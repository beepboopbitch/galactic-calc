function Input(age){
  this.age = age;
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

function mercuryAge(life){
  const ageOnMercury = ((life.age * 365) / 88);
  return Math.round(ageOnMercury);
}

function lifeLeftOnMercury(life){
  const timeLeftOnMercury = (((79 - life.age) * 365) / 88);
  return Math.round(timeLeftOnMercury);
}

export { Input, lifeLeft, dayAge, daysLeft, mercuryAge, lifeLeftOnMercury }

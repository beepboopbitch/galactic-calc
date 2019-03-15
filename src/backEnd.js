

//Testing
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

//Final code
function Input(age, planet, planetAge, timeLeftOnPlanet){
  this.age = age;
  this.planet = planet;
  this.planetAge = planetAge;
  this.timeLeftOnPlanet = timeLeftOnPlanet
}

function yourPlanetAge(life) {
  if (life.planet === "Venus"){
    life.planetAge = Math.round((life.age * 365) / 225);
  } else if (life.planet === "Mars"){
    life.planetAge = Math.round((life.age * 365) / 687);
  } else if (life.planet === "Mercury"){
    life.planetAge = Math.round((life.age * 365) / 88);
  } else if (life.planet === "Jupiter"){
    life.planetAge = Math.round((life.age * 365) / 4300);
  }
  return life.planetAge;
}

function timeLeftOnYourPlanet(life) {
  if (life.planet === "Venus"){
    life.timeLeftOnPlanet = Math.round(((79 - life.age) * 365) / 225);
  } else if (life.planet === "Mars"){
    life.timeLeftOnPlanet = Math.round(((79 - life.age) * 365) / 687);
  } else if (life.planet === "Mercury"){
    life.timeLeftOnPlanet = Math.round(((79 - life.age) * 365) / 88);
  } else if (life.planet === "Jupiter"){
    life.timeLeftOnPlanet = Math.round(((79 - life.age) * 365) / 4300);
  }
  return life.timeLeftOnPlanet;
}

export { Input, lifeLeft, dayAge, daysLeft, yourPlanetAge, timeLeftOnYourPlanet }



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
  if (life.planet === "venus"){
    life.planetAge = Math.round((life.age * 365) / 225);
  } else if (life.planet === "mars"){
    life.planetAge = Math.round((life.age * 365) / 687);
  } else if (life.planet === "mercury"){
    life.planetAge = Math.round((life.age * 365) / 88);
  } else if (life.planet === "jupiter"){
    life.planetAge = Math.round((life.age * 365) / 4300);
  }
  return life.planetAge;
}

function timeLeftOnYourPlanet(life) {
  if (life.planet === "venus"){
    life.timeLeftOnPlanet = Math.round(((79 - life.age) * 365) / 225);
  } else if (life.planet === "mars"){
    life.timeLeftOnPlanet = Math.round(((79 - life.age) * 365) / 687);
  } else if (life.planet === "mercury"){
    life.timeLeftOnPlanet = Math.round(((79 - life.age) * 365) / 88);
  } else if (life.planet === "jupiter"){
    life.timeLeftOnPlanet = Math.round(((79 - life.age) * 365) / 4300);
  }
  return life.timeLeftOnPlanet;
}

export { Input, lifeLeft, dayAge, daysLeft, yourPlanetAge, timeLeftOnYourPlanet }

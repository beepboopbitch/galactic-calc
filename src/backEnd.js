function Input(age){
  this.age = age;
}

function lifeLeft(life){
  const remainingLife = (79 - life.age);
  return remainingLife;
}

export { Input, lifeLeft }

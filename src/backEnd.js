function Input(day, month, year){
  this.day = day;
  this.month = month;
  this.year = year;
}

function yearCalc(date){
  const daysInYear = (date.year - 1) * 365.25;
  return parseInt(daysInYear);
}
function monthCalc(date){
  let daysInMonth = 0;
  const month = date.month;
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  for (let i = 0; i < month; i++){
    if (i === 4 || i === 6 || i === 9 || i === 11){
      daysInMonth += 30
    } else if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12){
      daysInMonth += 31
    } else if (i === 2){
      daysInMonth += 28
    }
    return daysInMonth;
  }
}

function daysCalc(date, yearDays, monthDays){
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const allDays = date.day + yearDays + monthDays;
  const dayOfTheWeek = allDays % 7;
  const final = weekdays[dayOfTheWeek];
  return final;
}

export { Input, yearCalc, monthCalc, daysCalc }

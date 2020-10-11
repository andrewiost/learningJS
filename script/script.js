let money, income, addExpenses, deposit, mission, period;

money = 30000;
income = 'Фриланс';
addExpenses = 'Интернет, такси, коммуналка';
deposit = false;
mission = 1000000;
period = 12;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', ');
console.log(addExpenses);

let budgetDay = money/30;
console.log(budgetDay);
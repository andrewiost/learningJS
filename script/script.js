'use strict';

let money, income, addExpenses, deposit, mission, period;

money = prompt('Ваш месячный доход?');
income = 'Фриланс';
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
deposit = confirm('Есть ли у вас депозит в банке?');
mission = 1000000;
period = 12;

let expenses1 = prompt('Введите обязательную статью расходов', 'Еда'),
    amount1 = prompt('Во сколько это обойдется?', '8000'), 
    expenses2 = prompt('Введите обязательную статью расходов', 'Коммуналка'),
    amount2 = prompt('Во сколько это обойдется?', '2500');

let budgetMonth = Number(money) - (Number(amount1) + Number(amount2));
let budgetDay = budgetMonth/30;

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', ');

console.log(addExpenses);
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');
console.log('Бюджет на месяц с учетом расходов: ' + budgetMonth);
console.log('Цель будет достигнута через: ' + (Math.ceil(mission/budgetMonth)) + ' месяцев');
console.log('Бюджет на один день: ' + budgetDay);

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 600) {
    console.log('К сожалению, у вас уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
}
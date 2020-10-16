'use strict';

const getExpensesMonth = function (amount1, amount2){
    return amount1 + amount2;
};

const getAccumulatedMonth = function(money, amount1, amount2) {
    return money - (amount1 + amount2);
};

const getTargetMonth = function(mission, accumulatedMonth) {
    return Math.ceil(mission/accumulatedMonth)
};

const getStatusIncome = function (budgetDay) {
    if (budgetDay >= 1200) {
        return 'У вас высокий уровень дохода';
    } else if (budgetDay >= 600 && budgetDay < 1200) {
        return 'У вас средний уровень дохода';
    } else if (budgetDay >= 0 && budgetDay < 600) {
        return 'К сожалению, у вас уровень дохода ниже среднего';
    } else {
        return 'Что-то пошло не так';
    }
};

const showTypeOf = function(data) {
    let result = data + " - " + typeof data;
    return result;
};

let money = Number(prompt('Ваш месячный доход?')),
    income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000,
    period = 12,
    expenses1 = prompt('Введите обязательную статью расходов', 'Еда'),
    amount1 = Number(prompt('Во сколько это обойдется?', '8000')), 
    expenses2 = prompt('Введите обязательную статью расходов', 'Коммуналка'),
    amount2 = Number(prompt('Во сколько это обойдется?', '2500')),
    accumulatedMonth = getAccumulatedMonth(money, amount1, amount2),
    budgetDay = accumulatedMonth/30;

addExpenses = addExpenses.toLowerCase();
addExpenses = addExpenses.split(', ');
  
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));
console.log('Расходы за месяц: ' + getExpensesMonth(amount1, amount2));
console.log(addExpenses);
console.log('Цель будет достигнута через ' + getTargetMonth(mission, accumulatedMonth) + ' месяцев');
console.log('Бюджет на 1 день: ' + budgetDay);
console.log(getStatusIncome(budgetDay));
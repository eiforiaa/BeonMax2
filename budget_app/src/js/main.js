/*jshint esversion: 6 */
let startBtn = document.getElementById('start'),
budgetValue = document.getElementsByClassName('budget-value')[0],
dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
levelValue = document.getElementsByClassName('level-value')[0],
expensesValue = document.getElementsByClassName('expenses-value'), //[0]
optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],//[0]
incomeValue = document.getElementsByClassName('income-value')[0],
monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

expensesItem = document.getElementsByClassName('expenses-item'),
expensesBtn = document.getElementsByTagName('button')[0],//кнопка утвердить
	optionalExpensesBtn = document.getElementsByTagName('button')[1], //кнопка рассчитать
    countBtn = document.getElementsByTagName('button')[2],//другая кнопка рассчитать
    incomeItem = document.querySelector('.choose-income'),
    //Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
checkSavings = document.querySelector('#savings'), //накопления получаем через id
	sumValue = document.querySelector('.choose-sum'), //сумма получаем через название класса
    percentValue = document.querySelector('.choose-percent'), //процент
    yearValue = document.querySelector('.year-value'),//год
    monthValue = document.querySelector('.month-value'),//месяц
    dayValue = document.querySelector('.day-value');//день

    
let money, time;

//addEventListener обработчик события
startBtn.addEventListener("click", function(){
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = prompt("Ваш бюджет на месяц","");
    
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц", "");
    }
    appData.budget = money;
    appData.timeData = time;
    //textContent получение и установление текста
    //toFixed форматирует число  круглого
    budgetValue.textContent = money;
    //для работы с кнопками используем value
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value;
            b = expensesItem[++i].value;
    
        if ((typeof(a)) ==='string' && (typeof(a) != null && a != '' && b !='' && a.length < 50)) {
    
            console.log("done");
                appData.expenses[a] = b;
                sum += +b;
    
        } else {
            console.log ("bad result");
            i--;
        }
        expensesValue.textContent = sum;
    }
   
});
optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length; i++){
       let opt = optionalExpensesItem[i].value;
       appData.optionalExpenses[i] = opt;
       optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';

    }
});
countBtn.addEventListener('click', function(){
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
    
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay >= 2000) {
            levelValue.textContent = "Высокий уровень достатка";
          
        }  else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка, Нажмите кнопку 'Начать рассчет'";
    }
   
});
    incomeItem.addEventListener('input', function(){
        let items = incomeItem.value;
        appData.income = items.split(', '); //превращаем строку в массив
        incomeValue.textContent = appData.income;
    });
    checkSavings.addEventListener('click', function(){
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sumValue.addEventListener('input', function(){
        if (appData.savings == true) {
            let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);

        }
    });
    persentValue.addEventListener('input', function(){
        if (appData.savings == true) {
            let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });
//объект с свойствами
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [], //доп доход
    timeData: time,
    savings: false,
};




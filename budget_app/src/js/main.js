/*jshint esversion: 6 */
let startBtn = document.getElementById("start"),
budgetValue = document.getElementsByClassName('budget-value'),
dayBudgetValue = document.getElementsByClassName('daybudget-value'),
levelValue = document.getElementsByClassName('level-value'),
expensesValue = document.getElementsByClassName('expenses-value'),
optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
incomeValue = document.getElementsByClassName('income-value'),
monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
yearSavingsValue = document.getElementsByClassName('yearsavings-value'),

expensesItem = document.getElementsByClassName('expenses-item'),
expensesBtn = document.getElementsByTagName('button')[0],//кнопка утвердить
	optionalExpensesBtn = document.getElementsByTagName('button')[1], //кнопка рассчитать
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


startBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате DD-MM_YY");
    money = prompt("Ваш бюджет на месяц");
    
    while(isNaN(money) || money == "" || money == null){
        money = prompt("Ваш бюджет на месяц");
    }
    appData.budget = money;
    appData.timeData = time;
    //textContent получение и установление текста
    //toFixed форматирует число
    budgetValue.textContent = money.toFixed();
});
//объект с свойствами
let appData = {
    budget: money,
    expenses: {},
    OptionalExpenses: {},
    income: [], //доп доход
    timeData: time,
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++){
            let a = +prompt("Введите обязательную статью расходов в этом месяцу", '');
            b = prompt("Во сколько обойдется?", '');
        
            if ((typeof(a)) ==='string' && (typeof(a) != null && a != '' && b !='' && a.length < 50)) {
        
                console.log("done");
                    appData.expenses[a] = b;
        
            } else {
                console.log ("bad result");
                i--;
            }
        
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed;
    alert("Дневной бюджет составляет: " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log ("Минимальный уровень достатка");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >= 2000) {
            console.log ("Высокий уровень достатка");
          
        }  else {
            console.log ("Произошла ошибка");
        }
    },
//есть ли у человека деньги
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с депозита " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for(let i=1; i<=3; i++){
            let questionOptExpenses = prompt("Статья обязательных расходов?");
            appData.OptionalExpenses[i] = questionOptExpenses;
            console.log(appData.OptionalExpenses);
    
        }
    },
    chooseIncome: function(){
        let items = prompt('Что принесет доп доход?(Перечислите через запятую)', '');
       if (typeof(items) != string || typeof(items) == null || items !="" ){
        console.log('Введены неправильные данные');
       } else {
        appData.income = items.split(', '); //превращаем строку в массив
        appData.income.push(prompt('Может что-то еще?')); //добавление в конец массива
        appData.income.sort(); //сортировка по буквам
       }
       appData.income.forEach(function(itemmassive, i){
           alert('Способы доп заработка:' + (i+1) + itemmassive);
       });
        
    }
};
//вывод всег объекта appData
for (let key in appData){
    console.log("Программа включает в себя данные: " + key + " - " + appData[key]);
}






//WHILE
// let i = 0;
// while ( i < 2){
//     let a = +prompt("Введите обязательную статью расходов в этом месяцу", '');
//     b = prompt("Во сколько обойдется?", '');

   

//     if ((typeof(a)) ==='string' && (typeof(a) != null && a != '' && b !='' && a.length < 50)) {

//         console.log("done");
//             appData.expenses[a] = b;

//     } else {
//         console.log ("bad result");
//           i--;
//         }
//     i++;
// }

//DO..WHILE

//   let i = 0;
// do {
//     let a = +prompt("Введите обязательную статью расходов в этом месяцу", '');
//     b = prompt("Во сколько обойдется?", '');

   

//     if ((typeof(a)) ==='string' && (typeof(a) != null && a != '' && b !='' && a.length < 50)) {

//         console.log("done");
//             appData.expenses[a] = b;

//     } else {
//         console.log ("bad result");
//         i--;
//     }

// }  while (i<2);


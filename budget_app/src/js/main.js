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
    // chooseExpenses: function(){
        
    // },
    // detectDayBudget: function(){
        
    // alert("Дневной бюджет составляет: " + appData.moneyPerDay);
    // },
    // detectLevel: function(){
        
    // },
//есть ли у человека деньги
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с депозита " + appData.monthIncome);
        }
    },
    chooseIncome: function(){
        // let items = prompt('Что принесет доп доход?(Перечислите через запятую)', '');
       if (typeof(items) != string || typeof(items) == null || items !="" ){
        console.log('Введены неправильные данные');
       } else {
        // appData.income = items.split(', '); //превращаем строку в массив
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



// for(let i=0; i<=3; i++){
//     let questionOptExpenses = prompt("Статья обязательных расходов?");
//     appData.OptionalExpenses[i] = questionOptExpenses;
//     console.log(appData.OptionalExpenses);

// }


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


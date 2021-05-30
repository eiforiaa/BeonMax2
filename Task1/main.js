
/*jshint esversion: 6 */
let money, time;

function start(){
    money = prompt("Ваш бюджет на месяц");
    time = prompt("Введите дату в формате DD-MM_YY");

    while(isNaN(money) || money == "" || money == null){
        money = prompt("Ваш бюджет на месяц");
    }
}
statr();
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
        appData.income = items.split(', '); //превращаем строку в массив
        
    }
};






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





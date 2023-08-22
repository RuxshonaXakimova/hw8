let bank = [
    {
        name: "Amazon",
        budget: 300000,
        tax: 12,
        expensesPerYear: [
            {
                title: 'rent',
                total: 60000
            },
            {
                title: 'ads',
                total: 20000
            },
        ]
    },
    {
        name: "Samsung Electronics",
        budget: 500000,
        tax: 10,
        expensesPerYear: [
            {
                title: 'rent',
                total: 3000
            },
            {
                title: 'public service',
                total: 70000
            },
            {
                title: 'ads',
                total: 20000
            },
        ]
    },
    {
        name: "Walmart",
        budget: 80000,
        tax: 15,
        expensesPerYear: [
            {
                title: 'rent',
                total: 30000
            },
            {
                title: 'public service',
                total: 20000
            },
            {
                title: 'ads',
                total: 20000
            },
        ]
    }
]


// for(let item of bank) {
//     let expensesPerMonth = 0

//     for(let exp of item.expensesPerYear) {
//         expensesPerMonth += exp.total
//     }

//     console.log(expensesPerMonth);
// }

let udachniye = []
let neudachniye = []

// 1. Найти кто больше всех платит налог
// 2. Создать новый ключ компаниям (процент) Найти соотношение трат и сохранить его в новом ключе
// 3. Вычитав все расходы включая налоги определить куда пушается компания в уд или не удачные если денег остается больше 0 то в уд меньше (не удачные)

// // 1 задание
let taxes = []
for(let item of bank){
    taxes.push(item.budget*item.tax/100)
}
let most = taxes.reduce((a,b)=> {
    if(a>b) {
        return a
    } 
    return b
})
console.log("Больше всех налог плaтит -",bank[taxes.indexOf(most)].name, most);


// 2 задание
let d = []
for(let item of bank){
    let allExps = 0
    for(let bb of item.expensesPerYear){
        allExps += bb.total 
    }
   d.push(allExps)
}
for(i=0; i<bank.length; i++){
    let selfTax = bank[i].budget*bank[i].tax/100
    bank[i].percent = (d[i]+selfTax)/bank[i].budget*100 
}
console.log(bank);


// // 3 задание
for(let item of bank){
    let totals = 0
    for(let i of item.expensesPerYear){
        totals += i.total
    }

    if(item.budget-(item.budget*item.tax/100)-totals>0){
    udachniye.push(item.name)
    } else {
        neudachniye.push(item.name)
    }   
}
console.log('Удачные компании -',udachniye, 'Неудачные компании -',neudachniye);








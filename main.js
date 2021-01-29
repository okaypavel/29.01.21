// let imie = "Pawel"
// const age = 17

// const isHealthy = true
// imie = "Wiktor"
// console.log("imie linia 4", imie)

// let name = "imie"
// console.log(name)

// const payment = 2500
// const bonus = 1400
// const year = 0
// const sum = year * payment + bonus

// function sunPaymentAndBonus(wyplata, premia, rok) {
//     return rok * wyplata + premia
// }

// const calaWyplata = sunPaymentAndBonus(payment, bonus, year)
// console.log(calaWyplata)

// function sumAndDivision(par1, par2, par3) {
//     if (par3 === 0 || par1 + par2 === 0) {
//         par3 = 1
//         par1 = 1
//         par2 = 1
//         return (par1 + par2) / par3
//     } else {
//         return (par1 + par2) / par3
//     }

// }

// let wynik = sumAndDivision(0, 0, 5)
// console.log(wynik)

// const payment = 1000
// const bonus = 500
// const money = 400
// const sum = payment + bonus
// function sunPaymentAndBonus(wyplata, premia, x) {
//     if (x === 0) {
//         money = 1
//         return (wyplata + premia) / money
//     } else {
//         return (wyplata + premia) / money
//     }
// }

// const calaWyplata = sunPaymentAndBonus(payment, bonus)
// console.log(calaWyplata)
// const sth = sunPaymentAndBonus(0, 0)
// console.log(sth)

function noName(ar1, ar2, ar3) {
    if(ar1 !=='' || ar2 !=='' || ar3 !== '') {
    return ar1.trim() + ' ' + ar2.trim() + ' ' + ar3.trim()
    } else {
        return "text jakis"
    }
}

const napis3 = noName("     jan", "        ilo", "              lat 12")

console.log(napis3)
// Масиви
//Методи масивів
//Цикли
//Отримання елементів зі сторінки


// примітивні типи - числа, строки, логічний тип, символ

const students_ages = [15,20,20,20,12.5]
const myArray = [true, 25, 'Mykola', [12,15]]
// індекс елементу в масиві 0 1 2 3 4 

const student = ['Andriy', 14, 'FE_190', ['Java', 'JavaScript'], true]
// 0 - ім'я
// 1 - вік

const empty = [125,15, 1444]
// методи вставки елементів в масив
empty.push(2023) // вставляє елементи в кінець
empty.unshift(2022) // вставляє елементи в початок

empty.pop() // видаляє елемент з кінця масиву
empty.shift() // видаляє елемент з початку масиву
// length - отримати "довжину"(кількість елементів) масиву

if([].length>0) {
    console.log("Не пустий")
} else {
 console.log("Пустий")   
}

const test = [125, 1444, 154, 1588, 0] // [124, 1044]

if(test[4] !== undefined) {
    test[4]/100
}

// null, undefined

// ()- кількість повторів, {} - що треба повторювати
// i - ітератор (ітерація)


for(let i=0;i<=3;i++){
const testLoop = [125, 12, 147, 1456]
console.log(testLoop[i])
}

const testLoop = [125, 12, 147, 1456, 'sfsfs', true]
let i = 0;
while(i<=testLoop.length -1 ) {
    console.log(testLoop[i])
    i++
}

var arrL = [12, 125, 147, 1, 150, 11, 35, 22]
const result = []
//записати в масив result всі числа більше 100 з масиву arr

let iterator = 0
while(iterator <= arrL.length-1) {
if(arrL[iterator]>100){
    result.push(arrL[iterator])
}
iterator++
}

console.log(result)

///--------------------------------------------------------------------------------------------------

const titles = document.querySelectorAll('h2')
let iter = 0;
while(iter <= 4){
    if (titles[iter].textContent === "Lorem, ipsum.") {
      titles[iter].style.color = "red"
    }
    iter++
}
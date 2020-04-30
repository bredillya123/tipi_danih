"use strict"

let $task1Field = document.querySelector('.task1 input')
let $task1Btn = document.querySelector('.task1 button')

let getResult = () => {
    let age = $task1Field.value
    if (age > 0, age < 3) $task1Btn.innerHTML = 'Вы малыш'
    else if (age > 3, age < 12) $task1Btn.innerHTML = 'Вы ребёнок'
    else if (age > 12, age < 18) $task1Btn.innerHTML = 'Вы подросток'
    else if (age > 18, age < 60) $task1Btn.innerHTML = 'Вы возрослый'
    else if (age > 60, age < 101) $task1Btn.innerHTML = 'Вы старый'
    else if (age > 100) $task1Btn.innerHTML = 'Вам скоро фиаско :('
    else $task1Btn.innerHTML = 'Вам не может быть столько лет -_-'

}

$task1Btn.onclick = getResult



let $task2Field = document.querySelector('.task2 input')
let $task2Btn = document.querySelector('.task2 button')

let getResult1 = () => {
    let num = $task2Field.value
    if (num < 0) $task2Btn.innerHTML = 'Ошибка 01. Введите число от 0 до 9'
    else if (num > 10) $task2Btn.innerHTML = 'Ошибка 02. Введите число от 0 до 9'
    else if (num = 1) $task2Btn.innerHTML = '!'
    else if (num = 2) $task2Btn.innerHTML = '@'
    else if (num = 3) $task2Btn.innerHTML = '#'
    else if (num = 4) $task2Btn.innerHTML = '$'
    else if (num = 5) $task2Btn.innerHTML = '%'
    else if (num = 6) $task2Btn.innerHTML = '^'
    else if (num = 7) $task2Btn.innerHTML = '&'
    else if (num = 8) $task2Btn.innerHTML = '*'
    else if (num = 9) $task2Btn.innerHTML = '('
    else if (num == 0) $task2Btn.innerHTML = ')'
    else $task2Btn.innerHTML = 'Ошибка03. Введите число от 0 до 9, в чём проблема -_-?'
}

$task2Btn.onclick = getResult1



let $task3Field = document.querySelector('.task3 input')
let $task3Btn = document.querySelector('.task3 button')

let getResult2 = () => {
    let chis = $task3Field.value
    let f1 = Math.floor(chis / 100)
    let f2 = Math.floor(chis / 10) % 10
    let f3 = chis % 10

    if (chis > 1000, chis < 0) $task3Btn.innerHTML = 'Нужно только 3-х значное'
    else if (f1 = f2, f2 = f3) $task3Btn.innerHTML = `Тут 3 числа повторяются`
    else if (f1 = f2, f1 = f3, f2 = f3) $task3Btn.innerHTML = `Тут 2 числа повторяются`
    else if (chis = chis) $task3Btn.innerHTML = `Тут числа не повторяются`
    else $task3Btn.innerHTML = 'Эксперементы любишь, да?'
}

$task3Btn.onclick = getResult2



let $task4Field = document.querySelector('.task4 input')
let $task4Btn = document.querySelector('.task4 button')

let getResult3 = () => {
    let year = $task4Field.value

    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) $task4Btn.innerHTML = 'Это высокосный год'
    else $task4Btn.innerHTML = 'Это не высокосный год'
}

$task4Btn.onclick = getResult3



let $task5Field = document.querySelector('.task5 input')
let $task5Btn = document.querySelector('.task5 button')

let getResult4 = () => {
    let b
    let c
    let e
    let a = $task5Field.value
    if ((a > 9999) && (a < 100000)) {
        b = a / 10000;
        a = a % 10000;
        c = a / 1000;
        a = a % 1000;
        a = a % 100;
        e = a / 10;
        a = a % 10;

        if ((b == a) && (c == e)) $task5Btn.innerHTML = 'Это число палиндром'
        else $task5Btn.innerHTML = 'Это число не палиндром'
    }
    else $task5Btn.innerHTML = 'Вы ввели не пятизначное'
}

$task5Btn.onclick = getResult4



let $task6Field = document.querySelector('.task6 input')
let $task6Btn = document.querySelector('.task6 button')
let $task6Btn2 = document.querySelector('.task6 .ua')
let $task6Title = document.querySelector('.task6 .us')

let getResult5 = () => {
    let usd = $task6Field.value
    let eur = usd * 0.92
    if (usd > 0) $task6Btn.innerHTML = `Вы получите ${eur} евро`
    else $task6Title.innerHTML = 'Введите сумму в USD'

}

let getResult6 = () => {
    let usd = $task6Field.value
    let uan = usd * 27
    if (usd > 0) $task6Btn2.innerHTML = `Вы получите ${uan} грн`
    else $task6Title.innerHTML = 'Введите сумму в USD'

}

$task6Btn.onclick = getResult5
$task6Btn2.onclick = getResult6



let $task7Field = document.querySelector('.task7 input')
let $task7Btn = document.querySelector('.task7 button')

let getResult7 = () => {
    let money = $task7Field.value
    if (money < 200) $task7Btn.innerHTML = `Скидочки нет, купите не много больше`
    else if (money > 200, money < 300) $task7Btn.innerHTML = `Вы получите cкидку 3%`
    else if (money > 300, money < 500) $task7Btn.innerHTML = `Вы получите cкидку 5%`
    else if (money > 500) $task7Btn.innerHTML = `Вы получите cкидку 7%`
    else $task7Title.innerHTML = 'Какова сумма вашей покупки'

}

$task7Btn.onclick = getResult7




let $task8Field = document.querySelector('.task8 input')
let $task8Field2 = document.querySelector('.task8 .kv')
let $task8Btn = document.querySelector('.task8 button')


let getResult8 = () => {
    let krug = $task8Field.value
    let kvadr = $task8Field2.value
    if (kvadr / 4 > krug) $task8Btn.innerHTML = `Круг поместиться в квадрат`
    else $task8Btn.innerHTML = 'Круг не поместиться, введите другую сумму'

}

$task8Btn.onclick = getResult8












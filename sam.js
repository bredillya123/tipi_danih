"use strict"

let $task1Field = document.querySelector('.task1 input')
let $task1Btn = document.querySelector('.task1 button')
let $task1Result = document.querySelector('.task1 .result')

let getSqr = () => {
  $task1Result.innerHTML = `Результат: ` + $task1Field.value ** 2
}

$task1Btn.onclick = getSqr

let $task2Field = document.querySelector('.task2 input')
let $task2Btn = document.querySelector('.task2 button')

let getResult = () => {
    let number = $task2Field.value
    if(number % 2 == 0) $task2Btn.innerHTML = 'Число четное'
    else $task2Btn.innerHTML = 'Число нечётное'
}

$task2Btn.onclick = getResult

let daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

let $task3 = document.createElement('div')
$task3.classList.add('task3')
$task3.classList.add('task')
$task3.innerHTML = '<input type="number"></input><button>Получить день</button>'
document.body.append($task3)
let $task3Btn = $task3.querySelector('button')

let showDay = () => {
    let number = $task3.querySelector('input').value
    let day = ''
    switch(number) {
        case '1': 
        day = daysOfWeek[0]
        break
        case '2': 
        day = daysOfWeek[1]
        break
        case '3': 
        day = daysOfWeek[2]
        break
        case '4': 
        day = daysOfWeek[3]
        break
        case '5': 
        day = daysOfWeek[4]
        break
        case '6': 
        day = daysOfWeek[5]
        break
        case '7': 
        day = daysOfWeek[6]
        break
    }

    console.log(day)
}

$task3Btn.onclick = showDay

let quesyions =['какого цвета небо', 'сколько пальцев на руке ?']
let answer =['белое красное синее желтое', '1 5 75 369', ]
let otvets = ['синее', '5']
let count = 0



for (let i = 0; i< quesyions.length; i++){
    let user_answer = prompt(quesyions[i] + ' ' + answer[i])
        if (user_answer == otvets[i]){
       count+=100
       alert('правильный ответ')
}else{
    alert('lol')
}
}alert('ты набрал'+count+'очков')





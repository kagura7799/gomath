const easyBtn = document.querySelector('#easy-btn')
const normalBtn = document.querySelector('#normal-btn')
const hardBtn = document.querySelector('#hard-btn')
const changeModeMenu = document.querySelector('.select-difficulty')
const playScreen = document.querySelector('.screen')
const example = document.querySelector('.example')
const answerInput = document.querySelector('.answer')
const sendBtn =  document.querySelector('.btn-answer')

const easyExamples = [
 {
    example: "1 + 2 =",
    answer: '3'
 },

 {
    example: "2 + 3 =",
    answer: '5'
 },


 {
    example: "10 - 5 =",
    answer: '5'
 },


 {
    example: "8 + 4 =",
    answer: '12'
 },


 {
    example: "7 - 2 =",
    answer: '5'
 },


 {
    example: "6 + 9 =",
    answer: '15'
 },


 {
    example: "12 - 8 =",
    answer: '4'
 },


 {
    example: "5 + 7 =",
    answer: '12'
 },
]

let countRightsAnswers = 0

easyBtn.onclick = () => {
    changeModeMenu.style.display = 'none'
    playScreen.style.display = 'block'

    let countPlace = 0

    sendBtn.onclick = () => {
        if (answerInput.value === easyExamples[countPlace].answer) {
            countRightsAnswers++
        }
        countPlace++
        example.textContent = easyExamples[countPlace].example
        answerInput.value = ''

        if (countPlace === 8) {

        }
    }
    example.textContent = easyExamples[countPlace].example
}

normalBtn.onclick = () => {
    changeModeMenu.style.display = 'none'
    playScreen.style.display = 'block'
}

hardBtn.onclick = () => {
    changeModeMenu.style.display = 'none'
    playScreen.style.display = 'block'
}



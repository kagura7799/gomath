const easyBtn = document.querySelector('#easy-btn')
const normalBtn = document.querySelector('#normal-btn')
const hardBtn = document.querySelector('#hard-btn')
const changeModeMenu = document.querySelector('.select-difficulty')
const playScreen = document.querySelector('.screen')
const example = document.querySelector('.example')
const answerInput = document.querySelector('.answer')
const sendBtn =  document.querySelector('.btn-answer')
const trueWindow = document.querySelector('.true-res')
const falseWindow = document.querySelector('.false-res')
const trueExamples = document.querySelector('.count-true-examples')
const trueExamples2 = document.querySelector('.count-true-examples2')
const descRes = document.querySelector('.result-window')
// const trueFlex = document.querySelector('.true-flex')

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

function computeExamples() {
    let countPlace = 0

    sendBtn.onclick = () => {
        if (answerInput.value === easyExamples[countPlace].answer) {
            countRightsAnswers++
        }
        countPlace++
        console.log(countPlace)
        example.textContent = easyExamples[countPlace].example
        answerInput.value = ''

        if (countPlace === 7) {
            if (countRightsAnswers >= 4) {
                playScreen.style.display = 'none'
                descRes.style.display = 'block'
                trueWindow.style.display = 'flex'
                trueExamples.textContent = countRightsAnswers
            }

            else {
                playScreen.style.display = 'none'
                descRes.style.display = 'block'
                falseWindow.style.display = 'flex'
                trueExamples2.textContent = countRightsAnswers
            }
        }
    }
    example.textContent = easyExamples[countPlace].example
}

easyBtn.onclick = () => {
    changeModeMenu.style.display = 'none'
    playScreen.style.display = 'block'
    computeExamples()
}

normalBtn.onclick = () => {
    changeModeMenu.style.display = 'none'
    playScreen.style.display = 'block'
}

hardBtn.onclick = () => {
    changeModeMenu.style.display = 'none'
    playScreen.style.display = 'block'
}



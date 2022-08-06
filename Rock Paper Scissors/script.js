let computerchoiceDisplay=document.getElementById('computer-choice')
let UserChoiceDisplay = document.getElementById('user-choice')
let Resultdisplay=document.getElementById('result')
let userChoice,computerchoice;

const possibleChoices=document.querySelectorAll('button')
possibleChoices.forEach(possibleChoice=> possibleChoice.addEventListener('click',(e)=> {
    userChoice=e.target.id
    UserChoiceDisplay.innerHTML=userChoice
    generateCOmputerChoice()
}))



function generateCOmputerChoice() {
    const randomNumber=Math.floor(Math.random()*3)+1
    if (randomNumber===1) {
        computerchoice='rock'
    }
    if (randomNumber===2) {
        computerchoice='paper'
    }
    if (randomNumber===3) {
        computerchoice='scissors'
    }
    computerchoiceDisplay.innerHTML=computerchoice

}
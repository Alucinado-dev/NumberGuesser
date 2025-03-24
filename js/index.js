/* first of all, break the problem into smaller problems inside the big problem */

/* what does the webdite need to do: */

/* 
- start the game when button start is clicked. defining the game level of difficulty
- generate a random number
- get the input number of the user
- compare the input with the random number
- if the number is equal: show alert message of winning
- if the number is not equal then:
    - if the number is bellow: show message 1  in the  result list
    - if the number is above: show message 2 in the result list.
    - chose a color of the message in the result list based on how far the number input is from the secret number.
    - increases in 1 the number of attempts.
- if the number of attempts is not over: return to 1 step.
- if the number of attempts is over : show alert message of losing.
- reset button : clear number of attempts and return to 2 step
*/



/* toggle between buttons on which one has the class active */
const buttonLevels = document.querySelectorAll('.level');
buttonLevels.forEach(button =>{
    button.addEventListener('click', () =>{
        buttonLevels.forEach(button =>{ button.classList.remove('active'); }) /* removes the class active of every button level */
        button.classList.add('active'); /* adds the class active to the clicked buttons */
        let level = levelSelector();
    })
})

/* as windows loads, runs levelSelector() in easy mode as default, active is in easy as default in index.HTML */
window.addEventListener('load', () => {
    let level = levelSelector();
})

/* defines what happens when the start button is clicked */
const startButton = document.getElementById('btn-start');
startButton.addEventListener('click', () => {
    
    /* awaits 1500 ms to make the transition to the game  */
    setTimeout(() => {
        
    }, 1500);

    const start = document.getElementById('start');
    start.style.display = 'none';

    const guessing = document.getElementById('guessing');
    guessing.style.display = 'flex';
    
})



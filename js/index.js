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

/* declaring a variable level which will receive an array of information about what level the game should start 
   it initializes as null in order to verify if  it will be receiving values on the current code 
   as windows loads, runs levelSelector() in easy mode as default, active is in easy as default in index.HTML 
*/

let level = [null, null, null, null]; 
const startButton = document.getElementById('btn-start');
const guessButton = document.getElementById('btn-guess'); 
const resetButton = document.getElementById('btn-reset');

/* defines what happens when the start button is clicked */
startButton.addEventListener('click', () => {
    
    /* hides the start section and shows the guessing section */
    const start = document.getElementById('start');
    start.style.display = 'none';
    const guessing = document.getElementById('guessing');
    guessing.style.display = 'flex';
    
    /* as a default config, the levelSelector() returns easy mode when the page loads */
    level = levelSelector();

    /* verifies if level was correctly defined */
    if(!level){
        /* error */
        alert('Error: level not defined');
        return;
    }

    /* destructuring level */
    let [, min, max,] = level;

    /* generating secret number */
    const secretNumber = Number(randomNumber(min, max));

    /* displaying initial attempts number */
    displayAttemptsLeft(level[3]);

    /* stores the secretNumber in level  */
    level.push(secretNumber);
    console.log(level);
}); 

/* the start button defines the level parameters but the game only starts when the guess btn is clicked */
guessButton.addEventListener('click', () => {
    /* prevents that the game continue if there's no attempts left */
    if (level[3] !== null && level[3] > 0){
        level[3] = level[3] - 1;
        game(level);
        displayAttemptsLeft(level[3]);
    }

    const inputNumber = document.getElementById('guess');
    inputNumber.value = '';
});

resetButton.addEventListener('click', () => {
    reset();
});

/* toggle between buttons on which one has the class active */
const buttonLevels = document.querySelectorAll('.level');
buttonLevels.forEach(button =>{
    button.addEventListener('click', () =>{
        buttonLevels.forEach(button =>{ button.classList.remove('active'); }) /* removes the class active of every button level */
        button.classList.add('active'); /* adds the class active to the clicked buttons */
    })
})






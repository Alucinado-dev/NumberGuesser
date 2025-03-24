/* generates a random number between min and max (min and max  included)  */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/* fills empty spaces on the subtitle with the informations about the game level chosen */
function setDifficultyToSubtitle(difficulty, min, max, numberOfAttempts){
    const difficultyPlace = document.getElementById('difficulty');
    const minPlace = document.getElementById('min-number');
    const maxPlace = document.getElementById('max-number');
    const attemptsPlace = document.getElementById('attempts-limit');
    
    difficultyPlace.textContent = difficulty;
    minPlace.textContent = min;
    maxPlace.textContent = max;
    attemptsPlace.textContent = numberOfAttempts;   
}

/* verifies if the button selected has the class active */
function isActive(button) {
    return button.classList.contains('active');
}

/* receives an array with  [dificulty, min, max, numberOfAttempts] */
function levelSelector(){
    const easyButton = document.getElementById('level-easy');
    const mediumButton = document.getElementById('level-medium');
    const hardButton = document.getElementById('level-hard');
    const expertButton = document.getElementById('level-expert');
    const supremeButton = document.getElementById('level-supreme');

    if(isActive(easyButton)){
        const [difficulty, min, max, numberOfAttempts] = ['an easy', 1, 10, 10];
        setDifficultyToSubtitle(difficulty, min, max, numberOfAttempts);
        return [difficulty, min, max, numberOfAttempts];  
    }

    if(isActive(mediumButton)){
        const [difficulty, min, max, numberOfAttempts] = ['a medium', 1, 50, 10];
        setDifficultyToSubtitle(difficulty, min, max, numberOfAttempts);
        return [difficulty, min, max, numberOfAttempts]
    }
    
    if(isActive(hardButton)){
        const [difficulty, min, max, numberOfAttempts] = ['a hard', 1, 100, 7];
        setDifficultyToSubtitle(difficulty, min, max, numberOfAttempts);
        return [difficulty, min, max, numberOfAttempts]
    }

    if(isActive(expertButton)){
        const [difficulty, min, max, numberOfAttempts] = ['an expert', 1, 1000, 7];
        setDifficultyToSubtitle(difficulty, min, max, numberOfAttempts);
        return [difficulty, min, max, numberOfAttempts]
    }

    if(isActive(supremeButton)){
        const min = randomNumber(1,9000);
        const max = min + 1000;
        const difficulty = 'a supreme';
        const numberOfAttempts = 5;
        setDifficultyToSubtitle(difficulty, min, max, numberOfAttempts);
        return [difficulty, min, max, numberOfAttempts]
    } 
}




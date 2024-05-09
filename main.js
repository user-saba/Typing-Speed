window.addEventListener('load', init)

// Globals

// Available Levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}

// Change Level
const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input')
const currentWord = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')

const words = [
    'animation',
    'speed',
    'game',
    'open',
    'close',
    'lose',
    'hurry',
    'work',
    'any',
    'where',
    'apply',
    'mother',
    'proceed',
    'install',
    'generation',
    'code',
    'shout',
    'typical',
    'satisfied',
    'latest',
    'screen',
    'comment',
    'explain',
    'share',
    'worship',
    'admission',
    'admit',
    'pass',
    'real',
    'see',
    'editors',
    'access',
    'cold',
    'outside',
    'have',
    'search',
    'explorer',
    'dictionary',
    'outline',
    'write',
    'understand',
    'incorrigable',
    'illeterate',
    'uneducated',
    'mirror',
    'choose',
    'cover',
    'friendship',
    'autobiography',
    'active',
    'tremendous',
    'incorrect',
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway', 
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendeous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'handle',
    'overflow',
    'hidden',
    'ground',
    'floor',
    'cucumber',
    'whole',
    'world',
    'ability',
    'only',
    'stuff',
    'dance',
    'transaction',
    'peel',
    'enough',
    'wonderful',
    'amazing',
    'stunning',
    'color',
    'flag',
    'phone',
    'read',
    'hyper',
    'listen',
    'both',
    'notebook',
    'power',
    'source',
    'energy',
    'oil',
    'state',
    'journey',
    'platform',
    'letter',
    'question',
    'college',
    'quite',
    'well',
    'success',
    'failure',
    'business',
    'purchase',
    'arrival',
    'festival',
    'given',
    'phrasel',
    'walking',
    'cambridge',
    'visit',
    'sentence',
    'wishes',
    'bring',
    'statement',
    'qualities',
    'stabbled',
    'different',
    'scientist',
    'express',
    'grattitude',
    'possibilities',
    'concentrate',
    'author',
    'according',
    'achieve',
    'forgot',
    'lumps',
    'obtain',
    'absorbed',
    'permission',
    'occupation'
];

// initialize Game
function init() {
    // Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words)
    // Start matching on word-input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
}

// start match
function startMatch() {
   if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
}
// if score -1, display 0
if (score === -1) {
    scoreDisplay.innerHTML = 0;
} else {
    scoreDisplay.innerHTML = score;
}
}


// Match currentword to wordInput
function matchWords() {
        if (wordInput.value === currentWord.innerHTML) {
            message.innerHTML = 'Correct!!!';
            return true;
        } else {
            message.innerHTML = '';
            return false;
        }
}



// Pick and show random number
function showWord(words) {
    // Generate random array index
    const randIndex = Math.floor(Math.random() * words.length)
    // Output random word
    currentWord.innerHTML = words[randIndex];
}

// Countdown Timer
function countdown() {
    // Make sure time is not run out
    if(time > 0) {
        // Decrement
        time--;
    } else if(time === 0) {
        // Game is Over
        isPlaying = false;
    }
    // show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}



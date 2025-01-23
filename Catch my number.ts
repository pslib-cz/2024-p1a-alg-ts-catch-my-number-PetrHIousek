const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const askQuestion = () => {
    rl.question('Guess the number (between 1 and 100): ', (answer: string) => {
        const guess = parseInt(answer, 10);
        attempts++;

        if (isNaN(guess)) {
            console.log('Please enter a valid number.');
        } else if (guess < randomNumber) {
            console.log('Too low!');
        } else if (guess > randomNumber) {
            console.log('Too high!');
        } else {
            console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
            rl.close();
            return;
        }

        askQuestion();
    });
};

askQuestion();
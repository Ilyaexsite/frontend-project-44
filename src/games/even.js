import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

export const playEvenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  
  console.log(`Congratulations, ${userName}!`);
};
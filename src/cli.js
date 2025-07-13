import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};

const runGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = getUserName(); 
  greetUser(userName); 

  const roundsCount = 3; 

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export { runGame, getUserName, greetUser };
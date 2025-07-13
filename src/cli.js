import readlineSync from 'readline-sync';

export function greetUser() {
  console.log('Welcome to the Brain Games!');
}

export function getUserName() {
  return readlineSync.question('May I have your name? ');
}
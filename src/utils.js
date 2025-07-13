
export const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
export function isEven(num) {
    return num % 2 === 0;
  }
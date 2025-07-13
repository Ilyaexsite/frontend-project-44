const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greetUser = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export { getUserName, greetUser };
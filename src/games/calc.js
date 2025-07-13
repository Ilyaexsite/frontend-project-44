import { runGame } from '../cli.js';
import { getRandomInt } from '../utils.js';

const rules = 'What is the result of the expression?';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const a = getRandomInt(1, 20);
  const b = getRandomInt(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  
  const question = `${a} ${operator} ${b}`;
  const answer = String(calculate(a, b, operator));
  
  return [question, answer];
};

export default () => runGame(rules, generateRound);
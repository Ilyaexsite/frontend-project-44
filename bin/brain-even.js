#!/usr/bin/env node

import { runGame } from '../src/cli.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * 100); 
  const question = number; 
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

runGame(description, generateRound);
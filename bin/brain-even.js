#!/usr/bin/env node

import { greetUser, getUserName } from '../src/cli.js';
import { getRandomInt, isEven } from '../src/gameUtils.js';
greetUser();
const userName = getUserName();
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const number = getRandomInt(1, 100);
console.log(`Question: ${number}`);
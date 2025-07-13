#!/usr/bin/env node

import { getUserName, greetUser } from '../src/cli.js';
import { playEvenGame } from '../src/games/even.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
greetUser(userName);

playEvenGame(userName);
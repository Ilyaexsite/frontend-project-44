#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { getRandomInt } from '../src/utils.js'
const calculateGCD = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}
const greetUser = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  return userName
}
const playGCDGame = () => {
  const userName = greetUser()
  console.log('Find the greatest common divisor of given numbers.')
  const roundsToWin = 3
  let correctAnswers = 0
  while (correctAnswers < roundsToWin) {
    const number1 = getRandomInt(1, 100)
    const number2 = getRandomInt(1, 100)
    const correctAnswer = calculateGCD(number1, number2)
    console.log(`Question: ${number1} ${number2}`)
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10)
    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      correctAnswers++
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
playGCDGame()
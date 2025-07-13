#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { getRandomInt } from '../src/utils.js'
const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}
const playProgressionGame = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('What number is missing in the progression?')
  const roundsCount = 3
  const minLength = 5
  const maxLength = 10
  for (let i = 0; i < roundsCount; i += 1) {
    const start = getRandomInt(1, 50)
    const step = getRandomInt(1, 10)
    const length = getRandomInt(minLength, maxLength)
    const progression = generateProgression(start, step, length)
    const hiddenIndex = getRandomInt(0, length - 1)
    const correctAnswer = progression[hiddenIndex].toString()
    const progressionWithHidden = [...progression]
    progressionWithHidden[hiddenIndex] = '..'
    const question = progressionWithHidden.join(' ')
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')
    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
playProgressionGame()

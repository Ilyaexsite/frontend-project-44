import readlineSync from 'readline-sync'
import { greetUser } from './cli.js'

const runGame = (gameRules, generateRound, roundsCount = 3) => {
  const userName = greetUser()
  console.log(gameRules)

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return false
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${userName}!`)
  return true
}

export default runGame

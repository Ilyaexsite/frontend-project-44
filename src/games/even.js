import runGame from '../cli.js'
import { getRandomNumber } from '../utils.js'
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'
const isEven = number => number % 2 === 0
const generateRound = () => {
  const question = getRandomNumber(1, 100)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return [question.toString(), correctAnswer]
}
export default () => {
  runGame(gameRules, generateRound)
}

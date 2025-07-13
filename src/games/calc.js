import { runGame } from '../cli.js'
const description = 'What is the result of the expression?'
const generateRound = () => {
  const number1 = Math.floor(Math.random() * 10)
  const number2 = Math.floor(Math.random() * 10)
  const operations = ['+', '-', '*']
  const operation = operations[Math.floor(Math.random() * operations.length)]
  let correctAnswer
  switch (operation) {
    case '+':
      correctAnswer = String(number1 + number2)
      break
    case '-':
      correctAnswer = String(number1 - number2)
      break
    case '*':
      correctAnswer = String(number1 * number2)
      break
    default:
      throw new Error(`Unknown operation: ${operation}`)
  }
  const question = `${number1} ${operation} ${number2}`
  return [question, correctAnswer]
}
const startGame = () => {
  runGame(description, generateRound)
}
export default startGame
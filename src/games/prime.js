import readlineSync from 'readline-sync'
const isPrime = (num) => {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false
  const sqrtNum = Math.sqrt(num)
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) return false
  }
  return true
}
const playPrimeGame = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  const roundsCount = 3
  const minNumber = 1
  const maxNumber = 100
  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomInt(minNumber, maxNumber)
    const correctAnswer = isPrime(number) ? 'yes' : 'no'
    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase()
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
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export const greetUser = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  return userName
}
export default playPrimeGame

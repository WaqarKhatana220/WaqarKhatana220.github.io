window.onload = () => {

  const inputValidation = input => {
    const regex = /^[0-9]*$/
    return regex.test(input)
  }

  const newGameGenerator = () => {
    const newGame = document.createElement('button')
    newGame.textContent = 'New Game'
    newGame.id = 'newGameButton'
    newGame.className = "btn btn-primary"
    newGame.addEventListener('click', (e) => {
      location.reload()
    })
    document.getElementById('newGame').appendChild(newGame)
  }

  let numberAttempts = 0
  const previousGuesses = []
  const number = document.getElementById('number')
  const guessesList = document.getElementById('guessesList')
  let victory = false

  const generatedNumber = Math.floor(Math.random() * 99) + 1
  console.log(generatedNumber)

  document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()

    const inputValue = Number(document.getElementById('guess').value)

    const pass = inputValidation(inputValue)
    if (pass) {

      numberAttempts += 1
      previousGuesses.push((inputValue))


      let guessMessage;
      if (inputValue > generatedNumber + 25) {
        guessMessage = 'Too high'
      }
      else if (inputValue > generatedNumber) {
        guessMessage = 'high'
      }
      else if (inputValue < generatedNumber - 25) {
        guessMessage = 'too low'
      }
      else if (inputValue < generatedNumber) {
        guessMessage = 'low'
      }
      else {
        guessMessage = 'You Won'
        victory = true
      }


      if (numberAttempts >= 10 && victory === false) {
        newGameGenerator()
        document.getElementById("victoryStatus").innerHTML = 'You Lost'
        document.getElementById('actualNumber').innerHTML = `The number was ${generatedNumber}`
        document.getElementById('submit').disabled = true
        number.innerHTML = numberAttempts
        guessesList.innerHTML += `${previousGuesses.pop()} `

      }
      else if (victory === true) {
        newGameGenerator()
        document.getElementById("victoryStatus").innerHTML = guessMessage
        document.getElementById('submit').disabled = true
        number.innerHTML = numberAttempts
        guessesList.innerHTML += `${previousGuesses.pop()} `
      }
      else{
        document.getElementById('victoryStatus').innerHTML = guessMessage
        number.innerHTML = numberAttempts
        guessesList.innerHTML += `${previousGuesses.pop()} `
        document.getElementById('guess').value = ""
      }  

    }

  })
}
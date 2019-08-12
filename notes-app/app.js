const fs = require('fs')
const readNote = require("./notes.js")
const chalk = require('chalk')


const clearNote = () => {
    fs.unlinkSync('notes.txt')
}

const makeNote = (note) => {
    fs.appendFileSync('notes.txt', note + "\r")
}

clearNote()
makeNote('Hello there!  ')
makeNote('My name is Nick.')
makeNote('And it is my birthday :)')
console.log(chalk.blue.inverse.bold(readNote()))
console.log(chalk.green("%s!"), 'Success')
console.log(chalk.red("We did it!"))
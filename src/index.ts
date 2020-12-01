import * as fs from 'fs'
import * as path from 'path';
import { exit } from 'process';

fs.readFile(path.join(__dirname, '../input.txt'), 'utf8', (error, data) => {
  if (error) {
    console.log(error)
    return
  }

  const input: number[] = data.split('\n').map(e => +e)

  const sorted = input.sort((a, b) => a - b)

  let dictionary = Object.assign({}, ...sorted.map((x) => ({[x]: x})));

  sorted.forEach(i => {
    const toFind = 2020 - i 
    if (dictionary.hasOwnProperty(toFind)) {
      console.log(toFind*i)
      exit(0)
    }
  })
})
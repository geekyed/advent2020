import * as fs from 'fs'
import * as path from 'path';
import { exit } from 'process';

fs.readFile(path.join(__dirname, '../input.txt'), 'utf8', (error, data) => {
  if (error) {
    console.log(error)
    return
  }

  const input: number[] = data.split('\n').map(e => +e)

  let dictionary = Object.assign({}, ...input.map((x) => ({[x]: x})));

  input.forEach(i => {
    const toFind = 2020 - i 
    if (dictionary.hasOwnProperty(toFind)) {
      console.log(toFind*i)
      exit(0)
    }
  })
})

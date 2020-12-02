import * as path from 'path';
import * as fs from 'fs'

export const day2 = () => {
  fs.readFile(path.join(__dirname, '../../data/input2.txt'), 'utf8', (error, data) => {
    if (error) {
      console.log(error)
      return
    }

    const input: string[] = data.split('\n')
    let count: number = 0

    input.forEach(line => {
      const hyphen: number = line.indexOf('-')
      const firstSpace: number = line.indexOf(' ')
      const colon: number = line.indexOf(':')

      const lower: number = +line.slice(0, hyphen)
      const upper: number = +line.slice(hyphen+1, firstSpace)
      const char: string = line.slice(firstSpace+1, firstSpace+2)

      const password: string = line.slice(colon+2, line.length)

      const numberOfChars: number = password.split('').filter(x => x === char).length
      
      if (numberOfChars <= upper && numberOfChars >= lower) count++

    })
    console.log(count)
  
  })
}
import * as path from 'path';
import * as fs from 'fs'

export const day2 = () => {
  fs.readFile(path.join(__dirname, '../../data/input.txt'), 'utf8', (error, data) => {
    if (error) {
      console.log(error)
      return
    }
  
  })
}
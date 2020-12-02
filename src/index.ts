import { day1 } from './days/day1'
import { day2 } from './days/day2'

interface Solutions {
  [i: number]: Function
}

const solutions: Solutions = {
  1: day1,
  2: day2
}

const day = +process.argv[2]

solutions[day]()







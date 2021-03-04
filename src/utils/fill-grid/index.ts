import { GRID, NUMBERS } from 'typings'
import { isInRow, shuffle } from 'utils'

const GridExample: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        //is it not in grid row?
        if (!isInRow({ grid, row, value })){ 

        let isNotInCol = true
        for (let i = 0; i < 9; i++) {
          if (value === grid[i][col]) isNotInCol = false
          //is it in grid col?
        }
        if(isNotInCol){

        }
      }
      grid[row][col] = value
    }
    
  }
  
}

export default fillGrid
import { BLOCK_COORDS, GRID, INDEX } from 'typings'

export interface IReducer {
  challengeGrid?: GRID
  solvedGrid?: GRID
  workingGrid?: GRID
  selectedBlock?: BLOCK_COORDS
}

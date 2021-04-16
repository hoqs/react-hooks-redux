import React, { FC, Children, useEffect, useCallback } from 'react'
import { Container, Row } from './styles'
import Block from './block'
import useMousetrap from 'react-hook-mousetrap'
import {useDispatch, useSelector} from 'react-redux'
import {AnyAction, Dispatch} from 'redux'
import { createGrid, fillBlock, IReducer, selectBlock } from 'reducers'
import { BLOCK_COORDS, GRID, INDEX, N, NUMBERS } from 'typings'

interface IState{
  selectedBlock?:BLOCK_COORDS 
  selectedValue: N
  solvedGrid?:GRID
}


const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(({selectedBlock, workingGrid, solvedGrid}) => ({
    selectedBlock,
    selectedValue: workingGrid && selectedBlock ? workingGrid[selectedBlock[0]][selectedBlock[1]] : 0,
    solvedGrid,
  }))
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(()=>dispatch(createGrid()), [dispatch])
  

  const fill = useCallback((n:NUMBERS)=>{
   if(state.selectedBlock && state.selectedValue === 0) dispatch(fillBlock(n, state.selectedBlock))
  }, [dispatch, state.selectedBlock, state.selectedValue])


  function moveDown(){
   if(state.selectedBlock && state.selectedBlock[0] < 8)
   dispatch (selectBlock([(state.selectedBlock[0] + 1) as INDEX,
    state.selectedBlock[1]
  
  ]))
  }

  function moveUp(){
    if(state.selectedBlock && state.selectedBlock[0] > 0) 
    dispatch (selectBlock([(state.selectedBlock[0] - 1) as INDEX,
    state.selectedBlock[1]
  
  ]))
  }

  function moveLeft(){
    if(state.selectedBlock && state.selectedBlock[1] > 0) 
    dispatch (selectBlock([
      state.selectedBlock[0],

      (state.selectedBlock[1] - 1) as INDEX
    
  
  ]))
  }

  function moveRight(){
    if(state.selectedBlock && state.selectedBlock[1] < 8) 
    dispatch (selectBlock([
      state.selectedBlock[0],
      (state.selectedBlock[1] + 1) as INDEX
    
  
  ]))
  }
  useMousetrap('1',()=>{fill(1)} )
  useMousetrap('2',()=>{fill(2)} )
  useMousetrap('3',()=>{fill(3)} )
  useMousetrap('4',()=>{fill(4)} )
  useMousetrap('5',()=>{fill(5)} )
  useMousetrap('6',()=>{fill(6)} )
  useMousetrap('7',()=>{fill(7)} )
  useMousetrap('8',()=>{fill(8)} )
  useMousetrap('9',()=>{fill(9)} )
  useMousetrap('down', moveDown)
  useMousetrap('up', moveUp)
  useMousetrap('left', moveLeft)
  useMousetrap('right', moveRight)

  useEffect(()=>{
    if(!state.solvedGrid)
    create()
  }, [create, state.solvedGrid])
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block rowIndex={rowIndex as INDEX} colIndex={colIndex as INDEX}> </Block> 
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid

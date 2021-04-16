import React, {FC, useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Action, Dispatch} from 'redux'

import {Button} from 'components'

import {createGrid} from 'reducers'

const NewButton:FC = () =>{
    const dispatch = useDispatch<Dispatch<Action>>()
    const createNewGrid = useCallback(()=>{
        if(window.confirm('Start a New Game?'))
        dispatch(createGrid())
    },[dispatch])
    return <Button onClick={createNewGrid}>New Game</Button>
}

export default NewButton
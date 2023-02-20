import React from 'react'
import {ControlsBtn,CounterControls} from './Controls.styled'

export const Controls =({onIncrement,onDecrement})=>{
    return(
        <CounterControls className="Counter__controls">
          <ControlsBtn type="button" onClick={onIncrement}>
            +1
          </ControlsBtn>
          <ControlsBtn type="button" onClick={onDecrement}>
            -1 
          </ControlsBtn>
        </CounterControls>
    )
}
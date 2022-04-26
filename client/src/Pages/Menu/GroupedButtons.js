import { Button, ButtonGroup } from '@mui/material'
import React, { useState } from 'react'

const GroupedButtons = () => {
  const [counter, setCounter] = useState(0)
  const displayCounter = counter > 0

  return (
    <ButtonGroup size='small' disableElevation variant='contained' style={{ backgroundColor: '#FBF3E4' }}>
      <Button style={{ backgroundColor: '#FFD36E' }} onClick={() => setCounter(counter + 1)}>
        +
      </Button>
      {displayCounter && <Button disabled>{counter}</Button>}
      {displayCounter && (
        <Button style={{ backgroundColor: '#FFD36E' }} onClick={() => setCounter(counter - 1)}>
          -
        </Button>
      )}
    </ButtonGroup>
  )
}

export default GroupedButtons

import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const GroupedButtons = () => {
  const [counter, setCounter] = useState(0)
  const displayCounter = counter > 0

  return (
    <ButtonGroup size='small' aria-label='small outlined button group'>
      <Button onClick={() => setCounter(counter + 1)}>+</Button>
      {displayCounter && <Button disabled>{counter}</Button>}
      {displayCounter && <Button onClick={() => setCounter(counter - 1)}>-</Button>}
    </ButtonGroup>
  )
}

export default GroupedButtons

import { Button, ButtonGroup } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../../Context'

const GroupedButtons = () => {
	const { itemQty, setItemQty } = useContext(Context)

	const [counter, setCounter] = useState(0)
	const displayCounter = counter > 0

	useEffect(() => {
		setItemQty(counter)
		console.log('items: ' + itemQty)
	}, [counter, itemQty, setItemQty])

	return (
		<ButtonGroup size='small' disableElevation variant='contained' style={{ backgroundColor: '#FBF3E4' }}>
			<Button style={{ backgroundColor: '#FFD36E' }} onClick={() => setCounter(counter + 1)}>
				+
			</Button>
			{displayCounter ? (
				<>
					<Button disabled>{counter}</Button>
					<Button style={{ backgroundColor: '#FFD36E' }} onClick={() => setCounter(counter - 1)}>
						-
					</Button>
				</>
			) : (
				<></>
			)}
		</ButtonGroup>
	)
}

export default GroupedButtons

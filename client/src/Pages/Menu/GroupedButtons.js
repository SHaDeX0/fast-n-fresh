import { Button, ButtonGroup } from '@mui/material'
import React, { useContext, useState } from 'react'

import { Context } from '../../Context'

const GroupedButtons = () => {
	const {  setItemQty } = useContext(Context)

	const [counter, setCounter] = useState(0)
	const displayCounter = counter > 0

	return (
		<ButtonGroup size='small' disableElevation variant='contained' style={{ backgroundColor: '#FBF3E4' }}>
			<Button
				style={{ backgroundColor: '#FFD36E' }}
				onClick={() => {
					setItemQty(counter + 1)
					setCounter(counter + 1)
					console.log(counter + 1)
				}}
			>
				+
			</Button>
			{displayCounter ? (
				<>
					<Button disabled>{counter}</Button>
					<Button
						style={{ backgroundColor: '#FFD36E' }}
						onClick={() => {
							setItemQty(counter - 1)
							setCounter(counter - 1)
							console.log(counter - 1)
						}}
					>
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

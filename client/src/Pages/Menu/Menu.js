import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import CustomCard from './CustomCard'

const Menu = () => {
    const [foodItems, setFoodItems] = useState(null)

    const getFoodItems = async () => {
        await Axios.get('http://localhost:5000/menu')
            .then(res => {
                setFoodItems(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getFoodItems()
    }, [])

    return (
        <div>
            {foodItems ? (
                foodItems.map(item => (
                    <div id='cards' key={item.id}>
                        <CustomCard id={item.id} image={item.image} name={item.name} />
                        <br />
                    </div>
                ))
            ) : (
                <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', height: '100vh', width: '100vw' }}>
                    <CircularProgress style={{ justifyContent: 'center', position: 'fixed', top: '50%' }} size={100} />
                </div>
            )}
        </div>
    )
}

export default Menu

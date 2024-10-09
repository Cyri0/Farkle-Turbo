import React, { useState } from 'react'

const Dice = () => {
    const [value, setValue] = useState(Math.floor(Math.random() * 6 + 1))
    const [isSelected, setIsSelected] = useState(false)

    const toggleDice = () => {
        setIsSelected(!isSelected)
    }

  return (
    <div className='dice-holder'>
        <div className={isSelected? 'dice selected-dice':'dice'} style={{
            top: Math.floor(Math.random() * 10 + 1),
            left: Math.floor(Math.random() * 10 + 1),
            rotate: Math.floor(Math.random() * 20 + 1 - 10) + "deg"
        }}
        
        onClick={toggleDice}
        >{value}</div>
    </div>
  )
}

export default Dice
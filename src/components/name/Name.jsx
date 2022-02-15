import React, { useState } from 'react'
import "./styles.css"

export default function Name() {
    const [name, setName] = useState('Nerea');

    const increase = () => {
        setName("Losáñez")
        if (name === "Losáñez") {
            setName("Nerea")
        }
    }



  return (
    <div className='container'>
        <h1 className='h1'>{name}</h1>
        <button onClick={increase} className="countButton">Click</button> 

    </div>
  )
}



// {name.length}
import React from 'react'
import './index.css'
export const CardPeople = ({id,name,image}) => {
    return (
        <div className="card-people" key={id}>
            <img src={image}/>
            <p>{name}</p>
        </div>
    )
}

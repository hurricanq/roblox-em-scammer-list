import React from 'react'
import scammer from '../assets/scammer.png'

const Card = (props) => {
  return (
    <a href={props.profile} target="_blank" className="py-2.5 bg-darkcard rounded-xl hover:bg-opacity-75 transition-opacity">
      <img src={scammer} alt="Example" className="h-16 px-5" />
      <div className="mt-2.5 px-5">
        <p className="text-xl font-bold">{props.username}</p>
        <p>{props.alts}</p>
      </div>
    </a>
  )
}

export default Card

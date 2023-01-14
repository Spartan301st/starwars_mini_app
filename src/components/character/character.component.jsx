import React from 'react'
import { Link } from 'react-router-dom'
import "./character.styles.scss"

const Character = ({name, characterID}) => {
  return (
    <>
    <Link className="character__link" to={characterID}>
        <div className="character__container">
            <span className="character__name">{name}</span>
        </div>
    </Link>
    </>
  )
}

export default Character
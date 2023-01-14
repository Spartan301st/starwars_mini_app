import React from 'react'
import { Link } from 'react-router-dom'

import "./nav.styles.scss"

const Navigation = () => {
  return (
    <div className='navbar__container'>
        <Link className="navbar__link" to={"/"}>
            <span className="navbar__logo">StarWars</span>
        </Link>
    </div>
  )
}

export default Navigation
import React from 'react'
import { Link } from 'react-router-dom'
import "./character-detail.styles.scss"

const CharacterDetail = ({detailTitle, detailValue}) => {
  return (
    <div className='characterDetail__container'>
        <span className='characterDetail__detailTitle'>{detailTitle}</span>
        {!Array.isArray(detailValue) ? 
        <span className='characterDetail__detailValue'>{detailValue}</span>
        : Array.isArray(detailValue) && detailValue.length === 0 ? 
        <span className='characterDetail__detailValue'>Unknown</span>
        :
        detailValue.map((value, i) => 
          // time wasn't enough to create separate components and define endpoints for spaceships, etc.
          // value url path would be used as a path to a new page
          <Link className='characterDetail__link' key={i} to="#">
            <div className='characterDetail__itemTitleContainer'>
              <span className='characterDetail__itemTitle'>{detailTitle} #{i}</span>
            </div>
          </Link>
          )
      }
        
    </div>
  )
}

export default CharacterDetail
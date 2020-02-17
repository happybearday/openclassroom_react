import PropTypes from 'prop-types'
import React from 'react'

import './Card.css'
const HIDDEN_SYMBOL = '❓'



const Card = ({ card, feedback, index, onClick}) => {
  let curr_classname = 'card'
  
  if (card === '_' || feedback === 'found') {
    curr_classname += ' found'
    onClick = ()=>{}
  }

  let content = HIDDEN_SYMBOL
  
  if (feedback === 'keyboard'){
    content = card
  } else if (feedback === 'found'){
    content = card
    onClick = ()=>{}
  }
  else if (card === '_'){
    content = card
  }

  return (
    <li className={curr_classname }  onClick={onClick}>
      <span className="symbol" key={index}>
        {content}
      </span>
    </li>
  )}


export default Card;
import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, prop_onClick }) => (
    <div className={`card ${feedback}`}  onClick={ () => prop_onClick(card)}>
      <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
      </span>
    </div>
  )
export default Card

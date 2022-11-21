import React from 'react'
import './ChallengeDetailCards.css'

const ChallengeDetailCard = ({cardName , cardValue}) => {
  return (
    <div className='details-card-container'>
      <div className="card-name">{cardName}</div>
      <div className="card-value">{cardValue}</div>
    </div>
  )
}

export default ChallengeDetailCard

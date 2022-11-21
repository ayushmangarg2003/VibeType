import React from 'react'
import ChallengeDetailCards from '../ChallengeDetailCards/ChallengeDetailCards'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import './TypingChallenegContainer.css'


const TypingChallenegContainer = ({onInputChange,testInfo,selectedParagraph ,words ,characters ,wpm ,timeRemaining ,timerStarted}) => {
  return (
    <div>
      <div className="typing-challenge-container">
        <div className="details-container">
          <ChallengeDetailCards cardName={'Words'} cardValue={words}/>
          <ChallengeDetailCards cardName={'Characters'} cardValue={characters}/>
          <ChallengeDetailCards cardName={'Speed'} cardValue={wpm + 'wpm'}/>
        </div>
        <div className="typewriter-container">
          <TypingChallenge 
          testInfo={testInfo}
          timerStarted={timerStarted}
          timeRemaining={timeRemaining}
          selectedParagraph={selectedParagraph}
          onInputChange = {onInputChange}  />
        </div>
      </div>
    </div>
  )
}

export default TypingChallenegContainer

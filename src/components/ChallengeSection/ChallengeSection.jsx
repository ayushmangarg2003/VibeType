import React from 'react'
import TestContainer from '../TestContainer/TestContainer'
import './ChallengeSection.css'

const ChallengeSection = ({startAgain,onInputChange,selectedParagraph ,testInfo ,words ,characters ,wpm ,timeRemaining ,timerStarted}) => {
  return (
    <div className='challenge-section-container'>
      <h1 className="challenge-section-header">Take a Speed Test Now</h1>
        <TestContainer 
        selectedParagraph={selectedParagraph} 
        timerStarted={timerStarted} 
        timeRemaining={timeRemaining} 
        words={words} 
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}/>
    </div>
  )
}

export default ChallengeSection

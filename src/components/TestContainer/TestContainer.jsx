import React from 'react'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallenegContainer'
import TryAgain from '../TryAgain/TryAgain'
import './TestContainer.css'

const TestContainer = ({startAgain,onInputChange,selectedParagraph ,testInfo,words ,characters ,wpm ,timeRemaining ,timerStarted}) => {

  return (
    <div className='test-container'>
      {
        timeRemaining > 0 ? (
          <div className="typing-challenge-container">
            <TypingChallengeContainer 
            timeRemaining={timeRemaining}
            selectedParagraph={selectedParagraph}
            timerStarted={timerStarted} 
            testInfo={testInfo} 
            words={words} 
            characters={characters} 
            wpm={wpm} 
            onInputChange={onInputChange}/>
          </div>
        ) : <div className="tryagain-container">
          <TryAgain startAgain={startAgain} words={words} characters={characters} wpm={wpm} />
        </div>
      }
    </div>
  )
}

export default TestContainer

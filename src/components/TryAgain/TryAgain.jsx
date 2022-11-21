import React from 'react'
import './TryAgain.css'

const TryAgain = ({startAgain,words,characters,wpm}) => {
  return (
    <div className='try-again-container'>
      <h1>Test Results</h1>
      <div className="results-container">
        <p>
          <strong>Words: </strong> {words}
        </p>
        <p>
          <strong>Characters: </strong> {characters}
        </p>
        <p>
          <strong>Speed: </strong> {wpm} wpm
        </p>
      </div>

      <div>
        <button onClick={() => startAgain()} className='end-buttons'>
            Try Again
        </button>
      </div>
    </div>
  )
}

export default TryAgain

import React from 'react'
import './TestLetter.css'

const TestLetter = ({individualLetterInfo}) => {

  const {status} = individualLetterInfo

  const statusClass = {
    correct:'correct',
    incorrect:'incorrect',
    notAttempted:'not-attempted'
  }[status]
  
  return (
    <span className={`${statusClass} test-letter`}>
      {individualLetterInfo.testLetter}
    </span>
  )
}

export default TestLetter

import { useEffect } from 'react'
import './TimedDiv.scss'

interface TimeDivProps {
  text: string
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

const TimedDiv = (props: TimeDivProps) => {
  const { text, state, setState } = props

  useEffect(() => {
    setTimeout(function setTimer() {
      setState(false)
    }, 10000)
  }, [state, setState])
  return (
    <>
      {state && (
        <div className="timed-div">
          <div className="timed-div-text">{text}</div>
        </div>
      )}
    </>
  )
}

export default TimedDiv

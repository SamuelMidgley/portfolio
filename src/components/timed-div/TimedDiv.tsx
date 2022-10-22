import { useEffect } from 'react'
import './TimedDiv.css'

interface TimeDivProps {
  text: string
  state: boolean
  setState: React.Dispatch<React.SetStateAction<boolean>>
}

const TimedDiv = (props: TimeDivProps) => {
  console.log('hello')
  const { text, state, setState } = props
  console.log(state)

  useEffect(() => {
    setTimeout(function () {
      console.log('finished')
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

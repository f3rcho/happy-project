import React, { useState, useEffect } from 'react'

const CountdownTimer: React.FC = () => {
  const [timeRequested, setTimeRequested] = useState<number>(15)
  const [countdown, setCountdown] = useState<number | null>(null)
  const [blink, setBlink] = useState<boolean>(false)

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setTimeRequested(parseInt(event.target.value))
  }

  const startCountdown = (): void => {
    setCountdown(timeRequested * 60)
  }

  const cancelCountdown = (): void => {
    setCountdown(null)
  }

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (countdown === 0) {
      setBlink(true)
    }
  }, [countdown])

  useEffect(() => {
    let blinkInterval: NodeJS.Timeout
    if (blink) {
      blinkInterval = setInterval(() => {
        setBlink((prevBlink) => !prevBlink)
      }, 500)
    }
    return () => clearInterval(blinkInterval)
  }, [blink])

  return (
    <div>
      <div>
        <label htmlFor='timeSelect'>Select Time:</label>
        <select id='timeSelect' onChange={handleTimeChange} value={timeRequested}>
          <option value={15}>15 min</option>
          <option value={30}>30 min</option>
          <option value={45}>45 min</option>
        </select>
      </div>
      <div>User Name: John Doe</div>
      <div>Time Requested: {timeRequested} min</div>
      {countdown !== null
        ? (
          <div>
            Countdown: {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, '0')}
          </div>
          )
        : (
          <button onClick={startCountdown}>Start Countdown</button>
          )}
      {countdown !== null && (
        <button onClick={cancelCountdown}>Cancel Countdown</button>
      )}
      {blink && <div style={{ color: 'red' }}>Countdown Ended!</div>}
    </div>
  )
}

export default CountdownTimer

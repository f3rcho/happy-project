import { Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface TimerProps {
  dateTime: string
  minutes: number
}

interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface TimerProps {
  dateTime: string
  minutes: number
}

const calculateCountdown = (targetDateTime: string, countdownMinutes: number, interval?: number): Countdown => {
  const targetTime = new Date(targetDateTime).getTime()
  const now = new Date().getTime()
  const finalTime = targetTime + countdownMinutes * 60000
  const timeRemaining = finalTime - now

  const seconds = Math.floor((timeRemaining / 1000) % 60)
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60)
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))

  return { days, hours, minutes, seconds }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Timer: React.FC<TimerProps> = ({ dateTime, minutes }) => {
  const [countdown, setCountdown] = useState<Countdown>(calculateCountdown(dateTime, minutes))

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown(dateTime, minutes, interval))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [dateTime, minutes])

  return (
    <Grid>
      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
        Fecha: {dateTime}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
        Tiempo solicitado: <p>{minutes} minutes</p>
      </Typography>
      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
        Countdown: <p>{countdown.minutes}:{countdown.seconds}</p>
      </Typography>
    </Grid>
  )
}

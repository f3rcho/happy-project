import { Card, CardActions, CardContent, Typography, Button } from '@mui/material'
import { Timer } from './Timer.tsx'

interface Props {
  name: string
  date: string
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function BasicCard ({ name, date }: Readonly<Props>) {
  return (
    <Card sx={{ minWidth: 275, gap: '8px' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.primary' gutterBottom>
          {name}
        </Typography>
        <Typography variant='body2'>
          <Timer dateTime={date} minutes={30} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' onClick={() => console.log()}>Stop</Button>
      </CardActions>
    </Card>
  )
}

import './App.css'
import { useParents } from './hooks/useParents'
import BasicCard from './components/Basic-card'
import { Grid } from '@mui/material'
import CountdownTimer from './components/Countdown-timer'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App () {
  const { parents } = useParents()
  return (
    <Grid>
      <header>
        <h1>Happy Land</h1>
      </header>
      <main>
        <p>Lista de usuarios</p>
        <CountdownTimer />
        <ul className='parents-list'>
          {
            parents.map(parent => (
              <BasicCard date={parent.createdAt} key={parent.id} name={parent.firstName} />
            ))
            }
        </ul>
      </main>
    </Grid>
  )
}

export default App

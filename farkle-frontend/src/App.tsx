import Controls from './components/Controls'
import GameTable from './components/GameTable'
import Tab from './components/Tab'

const App = () => {
  return (
    <>
      <aside className='left'>
        <Tab targetNumber={2000} player='P1'/>
        <Tab targetNumber={2000} player='P2'/>
      </aside>
      <GameTable />
      <aside className='right'>
        <Controls/>
      </aside>
    </>
  )
}

export default App
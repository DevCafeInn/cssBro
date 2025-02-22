import './App.css'
import Panel from './components/Panel'

const header = document.querySelector('#home h1') as HTMLElement;

function App() {

  return (
    <div id='cssbro'>
      <Panel element={header}  />
    </div>
  )
}

export default App

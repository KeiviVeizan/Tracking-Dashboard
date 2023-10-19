import './App.css'
import Card from './componentes/Card'
import { informacion } from './assets/añiaApi'
import Tarjetas from './componentes/Tarjetas'

function App() {

  return (
    <>

      <Tarjetas informacion = {informacion}/>
    </>
  )
}

export default App

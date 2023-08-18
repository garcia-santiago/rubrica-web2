import { useState } from 'react'
import './App.css'
import tareas from './assets/tareas.json'

import Card from './components/Card'
import Contador from './components/Contador'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col gap-y-3">
        <h1>Actividad 1 - Web II - SANTIAGO GARCÍA</h1>

        <Contador setCount={setCount} count={count}/>

        <div className="grid grid-rows-6 grid-flow-col gap-4 md:grid-rows-2 mx-auto">
          {tareas.map((obj, i) => 
            <Card count={count} character={obj} key={i}/>
            
          )}
        </div>

      </div>
    </>
  )
}

export default App

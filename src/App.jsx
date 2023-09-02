import { useState, useEffect  } from 'react'
import './App.css'
import tareas from './assets/tareas.json'
import deportes from './assets/deportes.json'
import Card from './components/Card'
import CardDeporte from './components/CardDeporte'
import Formulario from './components/Formulario'

const deportesInicial = JSON.parse(localStorage.getItem('deportes')) || deportes
const favoritosInicial = JSON.parse(localStorage.getItem('favoritos')) || []

function App() {

  const [estado, cambiarEstado] = useState(0);

  const [deportes_state, cambiarDeportes] = useState(deportesInicial);
  const [favoritos_state, cambiarFavoritos] = useState(favoritosInicial);

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos_state))
    localStorage.setItem('deportes', JSON.stringify(deportes_state))
  },[favoritos_state, deportes_state])




  return (
    <>
    <div className="flex flex-col gap-y-5" >
      
        <div className="flex gap-x-2 py-2 mx-auto mb-3">
            <div>            
                <button onClick={() => cambiarEstado((est) => 0)} className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                    Inicio
                </button>
            </div>
            <div>
                <button onClick={() => cambiarEstado((est) => 1)} className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                    Contenido
                </button>
            </div>
            <div>
                <button onClick={() => cambiarEstado((est) => 2)} className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                    Crear
                </button>
            </div>
        </div>

        { estado==0 ?
            (        
              <div className="">
                <h3 className='text-left font-bold text-3xl'>Con el apoyo de: </h3>
                <br />
                <div className="grid grid-rows-4 grid-flow-col gap-4 md:grid-rows-1 mx-auto">
                  {tareas.map((obj, i) => 
                    <Card character={obj} key={i} favoritos_state={favoritos_state} cambiarFavoritos={cambiarFavoritos}/>
                    
                  )}
                </div>
              </div>

            ):
            ('')
        }
        { estado==1 ?
            (        
              <div className="">
                  <h3 className='text-center font-bold text-3xl'>Deportes</h3>
                  <br />
                  <br />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
                    {deportes.map((obj, i) => 
                      <CardDeporte equipo={obj} key={i}/>      
                    )}
                </div>
              </div>
            ):
            ('')
        }
        { estado==2 ?
            (        
              <div className="grid grid-rows-4 grid-flow-col gap-4 md:grid-rows-1 mx-auto">
                <Formulario cambiarDeportes={cambiarDeportes} deportes_state={deportes_state} cambiarEstado={cambiarEstado}/>
              </div>
            ):
            ('')
        }
          <div className="myFooter grid grid-cols-2 mt-4 bg-gray-300 p-3 rounded w-full">
            <div className="col text-left">
              <p>Rubrica Corte 1 - Web II</p>
              <a href="https://sgarcia.com.co/" className='underline'>Santiago García Avilán</a>
              <p className='w-50'>Ingeniero Junior Fullstack, utilizando diferentes tecnologías (Vue, React, Node, Postgresql)</p>
            </div>
            <div className="col">
              <div className="flex flex-col gap-y-1">
                  <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 15 15" className='self-end'><path fill="currentColor" d="M14.977 1.467a.5.5 0 0 0-.87-.301a2.559 2.559 0 0 1-1.226.763A3.441 3.441 0 0 0 10.526 1a3.539 3.539 0 0 0-3.537 3.541v.44C3.998 4.75 2.4 2.477 1.967 1.325a.5.5 0 0 0-.916-.048C.004 3.373-.157 5.407.604 7.139C1.27 8.656 2.61 9.864 4.51 10.665C3.647 11.276 2.194 12 .5 12a.5.5 0 0 0-.278.916C1.847 14 3.55 14 5.132 14h.048c4.861 0 8.8-3.946 8.8-8.812v-.479c.363-.37.646-.747.82-1.236c.193-.546.232-1.178.177-2.006Z"/></svg>
                </div>
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='self-end'><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                </div>
                <div className="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='self-end'><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"/><path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011"/></g></svg>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App

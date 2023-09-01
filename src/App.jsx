import { useState, useEffect  } from 'react'
import './App.css'
import tareas from './assets/tareas.json'
import deportes from './assets/deportes.json'
import Card from './components/Card'
import CardDeporte from './components/CardDeporte'

function App() {

  const [estado, cambiarEstado] = useState(0);

  
  const deportesInicial = JSON.parse(localStorage.getItem('deportes'))
  const favoritosInicial = JSON.parse(localStorage.getItem('favoritos'))

  if(deportesInicial){
    console.log(deportesInicial)
  }
  else{
    localStorage.setItem('deportes', JSON.stringify(deportes))
  }



  const [favoritos_state, cambiarFavoritos] = useState([favoritosInicial]);
  const [deportes_state, cambiarDeportes] = useState([]);
  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos_state))
  },[favoritos_state])


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
                  <div>
                    <p className='inline'>Categoria: </p>
                    <select name="" id="">
                      <option value="value1">Todos</option>
                      <option value="value1">Equipos</option>
                      <option value="value2">Motor</option>
                      <option value="value3">Mesa</option>
                    </select>
                  </div>
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
                  CREATE
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
              <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='self-end'><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App

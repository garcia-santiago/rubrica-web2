import { useState } from 'react'

function Card(props) {
    const [estado, mostrarEstado] = useState(false);
    const prueba = true;
  return (
    <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-500 text-white">
            <img className="w-full h-50" src={props.character.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.character.name}  -  RickTokens: {props.count}</div>
                <p className="text-base">
                {props.character.desc}
                </p>
            </div>
            { estado ?
                (<p>{props.character.status} {props.character.status == 'Alive' ? '✅' : '💀'}</p>):
                ('')
            }
            <div className="mb-2">
                <button onClick={() => mostrarEstado(!estado)} className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                    Mostrar Estado
                </button>
            </div>
        </div>
    </>
  )
}

export default Card


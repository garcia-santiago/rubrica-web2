function Card(props) {

    const guardarItem = () =>{
        props.cambiarFavoritos([...props.favoritos_state, props.character.id])
    }
    const eliminarItem = () =>{
        props.cambiarFavoritos(() => props.favoritos_state.filter((item) => item !== props.character.id))
    }
      
  return (
    <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-black border-solid border-2 border-black">
            <img className="w-75 h-50 p-1" src={props.character.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.character.name}</div>
                <p className="text-base">
                {props.character.desc}
                </p>
            </div>
            {
                props.favoritos_state && props.favoritos_state.includes(props.character.id) ? 
                (
                    <div className="mb-2">
                        <button onClick={() => eliminarItem()} className="py-2 px-3 bg-red-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                            Eliminar <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 512 512" className="inline"><path fill="currentColor" d="M400 480a16 16 0 0 1-10.63-4L256 357.41L122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16Z"/></svg>
                        </button>
                    </div> 
                ): 
                (
                    <div className="mb-2">
                        <button onClick={() => guardarItem()} className="py-2 px-3 bg-green-800 text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                            Guardar <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 512 512" className="inline"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M352 48H160a48 48 0 0 0-48 48v368l144-128l144 128V96a48 48 0 0 0-48-48Z"/></svg>
                        </button>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default Card


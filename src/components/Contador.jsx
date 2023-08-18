function Card(props) {

  return (
    <>
        <div className="font-bold text-lg">RickTokens: {props.count}</div>
        <div className="flex gap-x-2 py-2 mx-auto ">
            <div>            
                <button onClick={() => props.setCount((count) => count + 1)} className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                    AUMENTAR
                </button>
            </div>
            <div>
                <button onClick={() => props.setCount((count) => count - 1)} className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                    DISMINUIR
                </button>
            </div>
            <div>
                <button onClick={() => props.setCount((count) => 0)} className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                    REINICIAR
                </button>
            </div>
        </div>
    </>
  )
}

export default Card



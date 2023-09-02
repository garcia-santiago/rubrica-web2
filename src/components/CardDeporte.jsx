function Card(props) {      
  return (
    <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg text-black border-solid border-2 border-black">
            <img className="max-h-13 p-1" src={props.equipo.img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.equipo.nombre}</div>
                <p className="text-xs">Categoria: {props.equipo.categoria}</p>
                <p className="text-base">
                {props.equipo.desc}
                </p>
                <a href={props.equipo.url_equipo} className="underline text-blue-500">{props.equipo.nombre_equipo}</a>
            </div>
        </div>
    </>
  )
}

export default Card

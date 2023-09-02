import React from 'react'
import {useFormik,} from 'formik'
import * as Yup from 'yup'
import Select from "react-select";

const Formulario = (props) => {
    const opciones = [
        {value:'equipos', label:'Equipos'},
        {value:'motor', label:'Motor'},
        {value:'mesa', label:'Mesa'}
    ]
    const formik = useFormik({
        initialValues:{nombre:'',desc:'',categoria:'equipos',nombre_equipo:'',url_equipo:''},
        validationSchema: Yup.object({
            nombre:Yup.string().required('Ingrese el nombre').min(3, 'Mínimo 3 caracteres').max(20, 'Máximo 20 caracteres'),
            desc:Yup.string().required('Ingrese la descripción').min(50, 'Mínimo 50 caracteres').max(200, 'Máximo 200 caracteres'),
            nombre_equipo:Yup.string().required('Ingrese el nombre del equipo').min(3, 'Mínimo 3 caracteres').max(15, 'Máximo 15 caracteres'),
            url_equipo:Yup.string().required('Ingrese la URL del equipo').min(10, 'Mínimo 3 caracteres').max(50, 'Máximo 50 caracteres'),
        }),
        onSubmit: values => {
            values.id = props.deportes_state.length+1
            values.img = 'ttps://www.topgear.com/sites/default/files/2023/01/A230172_medium_0.jpg'
            props.cambiarDeportes([...props.deportes_state, values])
            props.cambiarEstado(1)
        }
    })
  return (
    <div>
        <p className='mb-3 font-bold'>Formulario</p>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor=""></label>
                <input 
                    type="text" 
                    name="nombre"
                    onChange={formik.handleChange}
                    value={formik.values.nombre}
                    className='border mb-2'
                    placeholder='Nombre del deporte'
                />
                {
                    formik.touched.nombre && formik.errors.nombre  ?
                    (<div className='text-red-500 my-1 font-bold'> {formik.errors.nombre} </div>):''
                }
            </div>
            <div>
                <label htmlFor=""></label>
                <input 
                    type="text" 
                    name="desc"
                    onChange={formik.handleChange}
                    value={formik.values.desc}
                    className='border mb-2'
                    placeholder='Descripción'
                />
                {
                    formik.touched.desc && formik.errors.desc  ?
                    (<div className='text-red-500 my-1 font-bold'> {formik.errors.desc} </div>):''
                }
            </div>
            <div>
                <label htmlFor=""></label>
                <Select
                    name={formik.values.categoria}
                    onChange={value => formik.setFieldValue('categoria', value.value)}
                    options={opciones}
                />
            </div>
            <div>
                <label htmlFor=""></label>
                <input 
                    type="text" 
                    name="nombre_equipo"
                    onChange={formik.handleChange}
                    value={formik.values.nombre_equipo}
                    className='border mb-2'
                    placeholder='Nombre del equipo'
                />
                {
                    formik.touched.nombre_equipo && formik.errors.nombre_equipo  ?
                    (<div className='text-red-500 my-1 font-bold'> {formik.errors.nombre_equipo} </div>):''
                }
            </div>
            <div>
                <label htmlFor=""></label>
                <input 
                    type="text" 
                    name="url_equipo"
                    onChange={formik.handleChange}
                    value={formik.values.url_equipo}
                    className='border mb-2'
                    placeholder='URL del equipo'
                />
                {
                    formik.touched.url_equipo && formik.errors.url_equipo  ?
                    (<div className='text-red-500 my-1 font-bold'> {formik.errors.url_equipo} </div>):''
                }
            </div>

            <input type="submit" value="Enviar" className="py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none"/>
        </form>
    </div>
  )
}

export default Formulario
import React from 'react'
import Actividades from './Actividades'
import Horas from './Horas'
import Imagen from './Imagen'

function Card(props) {
    const informacion = props.informacion
  return (
    <div className='card'>
        <Imagen informacion = {informacion}/>
        <Actividades informacion = {informacion}/>
        <Horas informacion = {informacion}/>
    </div>
  )
}

export default Card
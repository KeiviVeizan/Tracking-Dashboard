import React from 'react'
import Card from './Card'

function Tarjetas(props) {
    const informacion = props.informacion
  return (
    <section>
        {informacion.map(info => {
            return (
                <Card informacion = {info}/>
            )
        })
        }
    </section>
  )
}

export default Tarjetas
import React from 'react'

function Horas(props) {
    const informacion = props.informacion
  return (
    <div>
        <div>
            {informacion.hours}
        </div>
        <div>
            {informacion.parrafo}
        </div>
    </div>
  )
}

export default Horas
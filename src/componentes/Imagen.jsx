import React from 'react'

function Imagen(props) {
    const informacion = props.informacion
  return (
    <div>
        <img src={informacion.Imgurl} alt="Work" />
    </div>
  )
}

export default Imagen
import React from 'react'

import "./Botonglobito.css"

function Botonglobito({children, isButton, onBotonglobito}) {
  return (
    <div className={`cont-fondo ${isButton ? 'boton-c-a': ''}`} onClick={() => isButton && onBotonglobito()} >
        {children}
    </div>
  )
}

export default Botonglobito
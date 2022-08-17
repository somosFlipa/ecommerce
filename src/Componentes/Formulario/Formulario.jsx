import React from 'react'

const Formulario = ({handleForm}) => {
  return (
    <div>
        <h2> Contactanos </h2>
        <div id='formcont' >
            <input id='input1' type="text" name="Nombre" placeholder='Nombre'/>
            <input id='input2' type="text" name="Categoria" placeholder='Categoria'/>
            <textarea id='textarea' name='Texto' placeholder='Escriba su Consulta Aqui!!!'/>
            <button type='submit' onClick={() => handleForm(document.querySelector('#textarea').value)}> Enviar </button>
        </div>
    </div>
  )
}

export default Formulario
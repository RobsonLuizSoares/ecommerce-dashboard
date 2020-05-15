import React from 'react'

const TextoDadosPedidos = ({ chave, valor }) => (
    <div >
        <strong > {chave}:&nbsp;</strong>
        <span>{valor} &nbsp; </span>
    </div>
)

export default TextoDadosPedidos
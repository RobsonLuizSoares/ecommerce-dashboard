import React from 'react'

const TextoDados = ({ chave, valor }) => (
    <div className='Texto-Dados'>
        <strong> {chave}:&nbsp;</strong>
        <span>{valor} &nbsp; </span>
    </div>
)

export default TextoDados


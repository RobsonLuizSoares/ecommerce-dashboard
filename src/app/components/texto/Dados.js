import React from 'react'

const TextoDados = ({ chave, valor, vertical = false }) => (
    <div className={`Texto-Dados flex ${vertical ? 'vertical' : 'horizontal'}`}>
        <strong className={`Texto-Dados flex ${!vertical ? 'flex-center' : ''}`} > {chave}:&nbsp;</strong>
        <span>{valor} &nbsp; </span>
    </div>
)



export default TextoDados


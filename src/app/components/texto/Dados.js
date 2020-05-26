import React from 'react'

const TextoDados = ({ chave, valor, vertical = false }) => (
    <div className={`Texto-Dados flex ${vertical ? 'vertical' : 'horizontal'}`}>
        <strong className={`Texto-Dados flex ${!vertical ? 'flex-center' : ''}`} > {chave}:&nbsp;</strong>
        <h5 >{valor} &nbsp; </h5>
    </div>
)



export default TextoDados


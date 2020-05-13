import React from 'react'

const Paginacao = ({ total, atual, limite, onClick }) => {
    const numeroPaginas = Math.ceil(total / limite)

    return (
        <div className='Paginacao flex horizontal'>
            {
                [...Array(numeroPaginas).keys()].map((numero, i) => {
                    const numeroAtualDaPagina = numero * limite
                    return (
                        <div key={i}
                            className={`
                            paginacao-item ${numeroAtualDaPagina === atual ? 'paginacao-item-active' : ''}`}
                            onClick={() => onClick(numeroAtualDaPagina)}
                        >
                            {numero + 1}
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Paginacao
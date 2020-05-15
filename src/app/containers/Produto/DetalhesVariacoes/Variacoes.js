import React, { Component } from 'react'
import Titulo from '../../../components/texto/Titulo'

class Variacoes extends Component {
    state = {
        variacaoSelecionada: 'DFSDYRTD',
        variacoes: [
            { nome: "P", id: "DFSDYRTD" },
            { nome: "M", id: "MFSDYASE" }
        ]
    }
    render() {
        const { variacoes, variacaoSelecionada } = this.state
        return (
            <div className='Variacoes flex vertical flex-center'>
                <Titulo tipo='h2' titulo='Variações' />
                {
                    variacoes.map((item, idx) => (
                        <div
                            onClick={() => this.setState({ variacaoSelecionada: item.id })}
                            className={`flex flex-center variacao-item ${variacaoSelecionada === item.id ? 'variacao-item-ativa' : ''}`}>
                            <span>{item.nome}</span>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Variacoes
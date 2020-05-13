import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import ListaDinamica from '../../components/listas/ListaDinamicaSimples'
import InputValor from '../../components/inputs/InputValor'
class DetalhesDaEntrega extends Component {
    state = {
        status: [
            "Preparando para Envio",
            "Postado",
            "Em trânsito"
        ],
        codigoDeRastreamento: "PA123456789BR"
    }

    onAddListaDinamica = (texto) => {
        if (!texto) return false
        const { status } = this.state
        status.push(texto)
        this.setState({ status })
    }

    handleSubmit = (value) => {
        this.setState({ codigoDeRastreamento: value })
        alert('Salvo')
    }
    render() {
        const { status, codigoDeRastreamento } = this.state
        return (
            <div className='Detalhes-do-Entrega'>
                <Titulo tipo='h3' titulo='Entrega' />
                <br />
                <label>Código de Rastreamento</label>
                <InputValor
                    value={codigoDeRastreamento}
                    handleSubmit={(value) => this.handleSubmit(value)}
                    name={codigoDeRastreamento}
                />
                <br />
                <ListaDinamica
                    dados={status}
                    onAdd={this.onAddListaDinamica}
                />
            </div>
        )
    }
}

export default DetalhesDaEntrega
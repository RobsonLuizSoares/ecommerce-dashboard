import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import ListaDinamica from '../../components/listas/ListaDinamicaSimples'



class DetalhesDoPagamento extends Component {
    state = {
        status: [
            "Aguardando Pagamento",
            "Processando Pagamento"
        ]
    }

    onAddListaDinamica = (texto) => {
        if (!texto) return false
        const { status } = this.state
        status.push(texto)
        this.setState({ status })
    }
    render() {
        const { status } = this.state
        return (
            <div className='Detalhes-do-Pagamento'>
                <Titulo tipo='h3' titulo='Pagamento' />
                <br />
                <ListaDinamica
                    dados={status}
                    onAdd={this.onAddListaDinamica}
                />
            </div>
        )
    }
}

export default DetalhesDoPagamento
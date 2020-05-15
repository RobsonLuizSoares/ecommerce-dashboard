import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import Tabela from '../../components/tabela/TabelaSimples'

import Moment from 'react-moment'

class DetalhesDosPedidos extends Component {


    onchangePesquisa = (e) => this.setState({ pesquisa: e.target.value })

    changeNumeroAtual = (atual) => this.setState({ atual })
    render() {
        //DADOS
        const dateToFormat = '1980-11-20T12:55-0300'
        const dados = [
            {
                "ID": "12313256432364216",
                "Valor Total": 89.90,
                "Data": <Moment>{dateToFormat}</Moment>,
                "Situação": "Aguardando Pagamento",
                "botaoDeDetalhes": "/pedido/12313256432364216"
            },
            {
                "ID": "FDSF5361GF54FG",
                "Valor Total": 188.90,
                "Data": <Moment>{dateToFormat}</Moment>,
                "Situação": "Aguardando Pagamento",
                "botaoDeDetalhes": "/pedido/FDSF5361GF54FG"
            },
            {
                "ID": "123FLSD45FDF564216",
                "Valor Total": 19.90,
                "Data": <Moment>{dateToFormat}</Moment>,
                "Situação": "Pagamento Concluído",
                "botaoDeDetalhes": "/pedido/123FLSD45FDF564216"
            }
        ]
        return (
            <div className='Detalhes-dos-Pedidos full-width'>
                <Titulo tipo='h3' titulo='Pedidos Feitos' />
                <br />
                <Tabela
                    cabecalho={['ID', 'Valor Total', 'Data', 'Situação']}
                    dados={dados}
                />
            </div>
        )
    }
}

export default DetalhesDosPedidos
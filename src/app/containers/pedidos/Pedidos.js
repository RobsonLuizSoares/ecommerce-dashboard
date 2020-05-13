import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import Pesquisa from '../../components/inputs/Pesquisa'
import Tabela from '../../components/tabela/TabelaSimples'
import Paginacao from '../../components/paginacao/Paginacao'
import Moment from 'react-moment'

class Pedidos extends Component {

    state = {
        pesquisa: '',
        atual: 0
    }
    onchangePesquisa = (e) => this.setState({ pesquisa: e.target.value })

    changeNumeroAtual = (atual) => this.setState({ atual })
    render() {
        const { pesquisa } = this.state
        //DADOS
        const dateToFormat = '1980-11-20T12:55-0300'
        const dados = [
            {
                "Cliente": "Cliente 1",
                "Valor Total": 89.90,
                "Data": <Moment>{dateToFormat}</Moment>,
                "Situação": "Aguardando Pagamento",
                "botaoDeDetalhes": "/pedido/12313256432364216"
            },
            {
                "Cliente": "Cliente 2",
                "Valor Total": 188.90,
                "Data": <Moment>{dateToFormat}</Moment>,
                "Situação": "Aguardando Pagamento",
                "botaoDeDetalhes": "/pedido/FDSF5361GF54FG"
            },
            {
                "Cliente": "Cliente 3",
                "Valor Total": 19.90,
                "Data": <Moment>{dateToFormat}</Moment>,
                "Situação": "Pagamento Concluído",
                "botaoDeDetalhes": "/pedido/123FLSD45FDF564216"
            }
        ]
        return (
            <div className='Pedidos'>
                <div className='Card'>
                    <Titulo tipo='h1' titulo='Pedidos' />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={'Pesquise aqui pelo nome do cliente'}
                        onChange={(e) => this.onchangePesquisa(e)}
                        onClick={() => alert('Pesquisar')}
                    />
                    <br />
                    <Tabela
                        cabecalho={['Cliente', 'Valor Toral', 'Data', 'Situação']}
                        dados={dados}
                    />
                    <Paginacao
                        atual={this.state.atual}
                        total={120}
                        limite={20}
                        onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
                    />
                </div>
            </div>
        )
    }
}

export default Pedidos
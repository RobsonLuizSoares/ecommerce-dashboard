import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import Pesquisa from '../../components/inputs/Pesquisa'
import Tabela from '../../components/tabela/TabelaSimples'
import Paginacao from '../../components/paginacao/Paginacao'


class ListaDeProdutos extends Component {

    state = {
        pesquisa: '',
        atual: 0
    }
    onchangePesquisa = (e) => this.setState({ pesquisa: e.target.value })

    changeNumeroAtual = (atual) => this.setState({ atual })
    render() {
        const { pesquisa } = this.state
        //DADOS
        //const dateToFormat = '1980-11-20T12:55-0300'
        const dados = [
            {
                "Produto": "Mouse 1",
                "Estoque": 20,
                "Disponibilidade": "sim",
                "botaoDeDetalhes": "/produto/KDFAJFDSFO3"
            },
            {
                "Produto": "Mouse 2",
                "Estoque": 20,
                "Disponibilidade": "não",
                "botaoDeDetalhes": "/produto/KDFDFAAJFDSFO3"
            },
            {
                "Produto": "Mouse 3",
                "Estoque": 20,
                "Disponibilidade": "sim",
                "botaoDeDetalhes": "/produto/KDFAJFDSKFDLFO3"
            },
            {
                "Produto": "Mouse 4",
                "Estoque": 20,
                "Disponibilidade": "sim",
                "botaoDeDetalhes": "/produto/KDFAJFDKFLD"
            },
            {
                "Produto": "Mouse 5",
                "Estoque": 20,
                "Disponibilidade": "sim",
                "botaoDeDetalhes": "/produto/KJFDLSDF"
            },



        ]
        return (
            <div className='ListaDeProdutos '>
                <br /><hr />
                <Titulo tipo='h2' titulo='Produtos da Categoria' />
                <br />
                <Pesquisa
                    valor={pesquisa}
                    placeholder={'Pesquise aqui pelo nome do produto ou descrição...'}
                    onChange={(e) => this.onchangePesquisa(e)}
                    onClick={() => alert('Pesquisar')}
                />
                <br />
                <Tabela
                    cabecalho={['Produto', 'Estoque', 'Disponibilidade']}
                    dados={dados}
                />
                <Paginacao
                    atual={this.state.atual}
                    total={120}
                    limite={20}
                    onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
                />
            </div>
        )
    }
}

export default ListaDeProdutos
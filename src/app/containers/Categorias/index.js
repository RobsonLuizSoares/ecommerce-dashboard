import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import Pesquisa from '../../components/inputs/Pesquisa'
import Tabela from '../../components/tabela/TabelaSimples'
import Paginacao from '../../components/paginacao/Paginacao'


class Categorias extends Component {

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
                "Categorias": "Acessórios",
                "Qtd. de Produtos": 15,
                "botaoDeDetalhes": "/categoria/acessorios"
            },
            {
                "Categorias": "Computadores",
                "Qtd. de Produtos": 5,
                "botaoDeDetalhes": "/categoria/computadores"
            },
            {
                "Categorias": "Fones de Ouvido",
                "Qtd. de Produtos": 7,
                "botaoDeDetalhes": "/categoria/fones-de-ouvido"
            },
            {
                "Categorias": "Gabinetes",
                "Qtd. de Produtos": 3,
                "botaoDeDetalhes": "/categoria/gabinetes"
            },
            {
                "Categorias": "Processadores",
                "Qtd. de Produtos": 8,
                "botaoDeDetalhes": "/categoria/processadores"
            },


        ]
        return (
            <div className='Categorias full-width'>
                <div className='Card'>
                    <Titulo tipo='h1' titulo='Categorias' />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={'Pesquise aqui pelo nome da categoria...'}
                        onChange={(e) => this.onchangePesquisa(e)}
                        onClick={() => alert('Pesquisar')}
                    />
                    <br />
                    <Tabela
                        cabecalho={['Categorias', 'Qtd. de Produtos']}
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

export default Categorias
import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import Pesquisa from '../../components/inputs/Pesquisa'
import Tabela from '../../components/tabela/TabelaSimples'
import Paginacao from '../../components/paginacao/Paginacao'

class Produtos extends Component {

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
                "Categoria": "acessorios",
                "Disponível": "sim",
                "botaoDeDetalhes": "/produto/GFSGVH45432"
            },
            {
                "Produto": "Mouse 1",
                "Categoria": "acessorios",
                "Disponível": "sim",
                "botaoDeDetalhes": "/produto/GSFDG45DSG4"
            },
            {
                "Produto": "Mouse 1",
                "Categoria": "acessorios",
                "Disponível": "sim",
                "botaoDeDetalhes": "/produto/LFDJSF4543FGF"
            },
            {
                "Produto": "Mouse 1",
                "Categoria": "acessorios",
                "Disponível": "sim",
                "botaoDeDetalhes": "/produto/OFDJADSF213"
            },
            {
                "Produto": "Mouse 1",
                "Categoria": "acessorios",
                "Disponível": "sim",
                "botaoDeDetalhes": "/produto/LDFJKSDFLK90098"
            }

        ]
        return (
            <div className='Produtos full-width'>
                <div className='Card'>
                    <Titulo tipo='h1' titulo='Produtos' />
                    <br />
                    <div className='flex'>
                        <div className='flex-3'>
                            <Pesquisa
                                valor={pesquisa}
                                placeholder={'Pesquise pelo produto, descrição ou categoria...'}
                                onChange={(e) => this.onchangePesquisa(e)}
                                onClick={() => alert('Pesquisar')}
                            />
                        </div>
                        <div className='flex-1 flex vertical'>
                            <label>
                                <small>Ordenar por: </small>
                            </label>
                            <select defaultValue=''>
                                <option>Aleatório</option>
                                <option value={"oaA-Z"}>De&nbsp; A a Z</option>
                                <option value={"oaA-A"}>De &nbsp;Z a A</option>
                                <option value={"op-menor"}>Menor Preço</option>
                                <option value={"op-maior"}>Maior Preço</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <Tabela
                        cabecalho={['Produto', 'Categoria', 'Disponível']}
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

export default Produtos
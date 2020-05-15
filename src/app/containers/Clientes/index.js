import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import Pesquisa from '../../components/inputs/Pesquisa'
import Tabela from '../../components/tabela/TabelaSimples'
import Paginacao from '../../components/paginacao/Paginacao'

class Clientes extends Component {

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
                "Cliente": "Cliente 1",
                "E-mail": "cliente1@gmail.com",
                "Telefone": "48 98427-0306",
                "CPF": "29073222818",
                "botaoDeDetalhes": "/cliente/cliente1@gmail.com"
            },
            {
                "Cliente": "Cliente 2",
                "E-mail": "cliente2@gmail.com",
                "Telefone": "48 98427-0306",
                "CPF": "29073222818",
                "botaoDeDetalhes": "/cliente/cliente2@gmail.com"
            },
            {
                "Cliente": "Cliente 3",
                "E-mail": "cliente3@gmail.com",
                "Telefone": "48 98427-0306",
                "CPF": "29073222818",
                "botaoDeDetalhes": "/cliente/cliente3@gmail.com"
            },
            {
                "Cliente": "Cliente 4",
                "E-mail": "cliente4@gmail.com",
                "Telefone": "48 98427-0306",
                "CPF": "29073222818",
                "botaoDeDetalhes": "/cliente/cliente4@gmail.com"
            }
        ]
        return (
            <div className='Clientes full-width'>
                <div className='Card'>
                    <Titulo tipo='h1' titulo='Clientes' />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={'Pesquise aqui pelo nome do cliente...'}
                        onChange={(e) => this.onchangePesquisa(e)}
                        onClick={() => alert('Pesquisar')}
                    />
                    <br />
                    <Tabela
                        cabecalho={['Cliente', 'E-mail', 'Telefone', 'CPF']}
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

export default Clientes
import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import Pesquisa from '../../components/inputs/Pesquisa'
import Tabela from '../../components/tabela/TabelaSimples'
import Paginacao from '../../components/paginacao/Paginacao'
import { connect } from 'react-redux'
import * as actions from '../../actions/clientes'

class Clientes extends Component {

    state = {
        pesquisa: '',
        atual: 0,
        limit: 5
    }

    getClientes() {
        const { atual, limit, pesquisa } = this.state
        const { usuario } = this.props

        if (!usuario) return null
        const loja = usuario.loja

        if (pesquisa) this.props.getClientesPesquisa(pesquisa, atual, limit, loja)
        else this.props.getClientes(atual, limit, loja)

    }

    componentDidMount() {
        this.getClientes()
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.usuario && this.props.usuario) this.getClientes()
    }

    handleSubmitPesquisa() {
        this.setState({ atual: 0 }, () => this.getClientes())
    }

    onchangePesquisa = (e) => this.setState({ pesquisa: e.target.value })

    changeNumeroAtual = (atual) => this.setState({ atual }, () => this.getClientes())

    render() {
        const { pesquisa } = this.state
        const { clientes } = this.props

        let dados = (clientes ? clientes.docs : []).map((item) => ({

            "Cliente": item.nome,
            "E-mail": item.usuario ? item.usuario.email : '',
            "Telefone": item.telefones[0],
            "CPF": item.cpf,
            "botaoDeDetalhes": `/cliente/${item._id}`

        }))
        return (
            <div className='Clientes full-width'>
                <div className='Card'>
                    <Titulo tipo='h1' titulo='Clientes' />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={'Pesquise aqui pelo nome do cliente...'}
                        onChange={(e) => this.onchangePesquisa(e)}
                        onClick={() => this.handleSubmitPesquisa()}
                    />
                    <br />
                    <Tabela
                        cabecalho={['Cliente', 'E-mail', 'Telefone', 'CPF']}
                        dados={dados}
                    />
                    <Paginacao
                        atual={this.state.atual}
                        total={clientes ? clientes.total : 0}
                        limite={this.state.limit}
                        onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    clientes: state.cliente.clientes,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(Clientes)
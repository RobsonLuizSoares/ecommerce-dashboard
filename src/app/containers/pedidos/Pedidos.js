import React, { Component } from 'react'
import moment from 'moment'

import Titulo from '../../components/texto/Titulo'

import Pesquisa from '../../components/inputs/Pesquisa'
import Tabela from '../../components/tabela/TabelaSimples'
import Paginacao from '../../components/paginacao/Paginacao'

import { connect } from 'react-redux'
import * as actions from '../../actions/pedidos'
import { formatMoney } from '../../actions/index'

class Pedidos extends Component {

    state = {
        pesquisa: '',
        atual: 0,
        limit: 4
    }

    getPedidos() {
        const { atual, limit, pesquisa } = this.state
        const { usuario } = this.props

        if (!usuario) return null
        const loja = usuario.loja
        if (pesquisa) {
            this.props.getPedidosPesquisa(pesquisa, atual, limit, loja)
        } else {
            this.props.getPedidos(atual, limit, loja)
        }

    }

    componentDidMount() {
        this.getPedidos()
    }


    componentDidUpdate(prevProps) {
        if (!prevProps.usuario && this.props.usuario) this.getPedidos()
    }

    handleSubmitPesquisa() {
        this.setState({ atual: 0 }, () => {

            const { atual, limit, pesquisa } = this.state
            const { usuario } = this.props

            if (!usuario) return null
            const loja = usuario.loja
            this.props.getPedidosPesquisa(pesquisa, atual, limit, loja)
        })
    }

    onchangePesquisa = (e) => this.setState({ pesquisa: e.target.value })

    changeNumeroAtual = (atual) => {
        this.setState({ atual }, () => {
            this.getPedidos()
        })
    }

    render() {

        const { pesquisa } = this.state
        const { pedidos } = this.props

        /* const dados = (pedidos ? pedidos.docs : []).map((item) => ({
            "Cliente": item.cliente ? item.cliente.nome : '',
            "Valor Total": formatMoney(item.pagamento.valor),
            "Data": moment(item.createdAt).format("DD/MM/YYYY").toLocaleString(),
            "Situação": item.pagamento.status !== 'Paga' ? item.pagamento.status : item.entrega.status,
            "botaoDeDetalhes": `/pedido/${item._id}`
        })) */
        const dados = [];
        (pedidos ? pedidos.docs : []).forEach((item) => {
            dados.push({
                "Cliente": item.cliente ? item.cliente.nome : "",
                "Valor Total": formatMoney(item.pagamento.valor),
                "Data": moment(item.createdAt).format("DD/MM/YYYY"),
                "Situação": item.pagamento.status !== "Paga" ? item.pagamento.status : item.entrega.status,
                "botaoDeDetalhes": `/pedido/${item._id}`
            })
        });



        return (
            <div className='Pedidos full-width'>
                <div className='Card'>
                    <Titulo tipo='h1' titulo='Pedidos' />
                    <br />
                    {JSON.stringify(pesquisa)}
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={'Pesquise aqui pelo nome do cliente'}
                        onChange={(e) => this.onchangePesquisa(e)}
                        onClick={() => this.handleSubmitPesquisa()}
                    />
                    <br />
                    <Tabela
                        cabecalho={['Cliente', 'Valor Total', 'Data', 'Situação']}
                        dados={dados}
                    />

                    <Paginacao
                        atual={this.state.atual}
                        total={this.props.pedidos ? this.props.pedidos.total : 0}
                        limite={this.state.limit}
                        onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        pedidos: state.pedido.pedidos,
        usuario: state.auth.usuario
    }
)

export default connect(mapStateToProps, actions)(Pedidos)
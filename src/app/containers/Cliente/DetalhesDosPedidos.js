import React, { Component } from 'react'
import moment from 'moment'
import Titulo from '../../components/texto/Titulo'
import Tabela from '../../components/tabela/TabelaSimples'
import Paginacao from '../../components/paginacao/Paginacao'

import { connect } from 'react-redux'
import * as actions from '../../actions/clientes'
import { formatMoney } from '../../actions/index'


class DetalhesDosPedidos extends Component {

    state = {
        atual: 0,
        limit: 5
    }

    getPedidos() {
        const { atual, limit } = this.state
        const { usuario, id } = this.props
        if (!usuario || !id) return null
        this.props.getClientePedidos(id, atual, limit, usuario.loja)

    }

    componentDidMount() {
        this.getPedidos()
    }


    componentDidUpdate(prevProps) {
        if (!prevProps.usuario && this.props.usuario) this.getPedidos()
    }

    //onchangePesquisa = (e) => this.setState({ pesquisa: e.target.value })

    changeNumeroAtual = (atual) => this.setState({ atual }, () => this.getPedidos())


    render() {
        const { clientePedidos } = this.props
        if (!clientePedidos) return (<div></div>)

        let dados = (clientePedidos ? clientePedidos.docs : []).map((item) => ({
            'ID': item._id,
            'Valor Total': formatMoney(item.pagamento.valor),
            'Data': moment(item.createdAt).format("DD/MM/YYYY"),
            'Situação': `Pagamento: ${item.pagamento.status || '-'} / Entrega: ${item.entrega.status || '-'} `,
            'botaoDeDetalhes': `/pedido/${item._id}`
        }))

        return (
            <div className='Detalhes-dos-Pedidos full-width'>
                <Titulo tipo='h3' titulo='Pedidos Feitos' />
                <br />
                <Tabela
                    cabecalho={['ID', 'Valor Total', 'Data', 'Situação']}
                    dados={dados}
                />
                <Paginacao
                    atual={this.state.atual}
                    total={this.props.clientePedidos ? this.props.clientePedidos.total : 0}
                    limite={this.state.limit}
                    onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    usuario: state.auth.usuario,
    clientePedidos: state.cliente.clientePedidos
})
export default connect(mapStateToProps, actions)(DetalhesDosPedidos)
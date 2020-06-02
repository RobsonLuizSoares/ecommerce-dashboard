import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import Pesquisa from '../../components/inputs/Pesquisa'
import Tabela from '../../components/tabela/TabelaSimples'
import Paginacao from '../../components/paginacao/Paginacao'
import { Link } from 'react-router-dom'

import * as actions from '../../actions/produtos'
import { connect } from 'react-redux'


class Produtos extends Component {

    state = {
        pesquisa: '',
        atual: 0,
        limit: 5,
        ordem: 'alfabetica_a-z'
    }

    getProdutos(props) {
        const { atual, limit, pesquisa, ordem } = this.state
        const { usuario } = props

        if (!usuario) return null
        if (pesquisa) props.getProdutosPesquisa(pesquisa, ordem, atual, limit, usuario.loja)
        else props.getProdutos(ordem, atual, limit, usuario.loja)
    }

    componentDidMount() {
        this.getProdutos(this.props)
    }

    componentDidUpdate(prevProps) {
        if (!prevProps && this.props.usuario) this.getProdutos(this.props)
    }

    handleSubmitPesquisa() {
        this.setState({ atual: 0 }, () => this.getProdutos(this.props))
    }


    onchangePesquisa = (e) => this.setState({ pesquisa: e.target.value })

    changeNumeroAtual = (atual) => this.setState({ atual }, () => this.getProdutos(this.props))

    changeOrdem = (ev) => this.setState({ ordem: ev.target.value }, () => this.getProdutos(this.props))

    renderBotaoNovo = () => {
        return (
            <Link
                className='button button-success button-small'
                to='/produtos/novo'
            >
                <i className='fas fa-plus'></i>
                <span>&nbsp;Novo Produto </span>
            </Link>
        )
    }

    render() {
        const { pesquisa } = this.state
        const { produtos } = this.props
        //DADOS
        //const dateToFormat = '1980-11-20T12:55-0300'
        let dados = (produtos ? produtos.docs : []).map((item) => ({
            "Produto": item.titulo,
            "Categoria": item.categoria ? item.categoria.nome : '',
            "Disponível": (item.disponibilidade ? 'sim' : 'não'),
            "botaoDeDetalhes": `/produtos/${item._id}`
        }))
        return (
            <div className='Produtos full-width'>
                <div className='Card'>
                    <Titulo tipo='h1' titulo='Produtos' />
                    <br />
                    {this.renderBotaoNovo()}
                    <br /><br />
                    <div className='flex'>
                        <div className='flex-3'>
                            <Pesquisa
                                valor={pesquisa}
                                placeholder={'Pesquise pelo produto, descrição ou categoria...'}
                                onChange={(e) => this.onchangePesquisa(e)}
                                onClick={() => this.handleSubmitPesquisa()}
                            />
                        </div>
                        <div className='flex-1 flex vertical'>
                            <label>
                                <small>Ordenar por: </small>
                            </label>
                            <select value={this.ordem} onChange={this.changeOrdem}>
                                <option value={"alfabetica_a-z"}>De&nbsp; A a Z</option>
                                <option value={"alfabetica_z-a"}>De &nbsp;Z a A</option>
                                <option value={"preco-crescrente"}>Menor Preço</option>
                                <option value={"preco-decrescente"}>Maior Preço</option>
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
                        total={this.props.produtos ? this.props.produtos.total : 0}
                        limite={this.state.limit}
                        onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    produtos: state.produto.produtos,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(Produtos)
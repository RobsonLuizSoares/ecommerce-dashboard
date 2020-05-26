import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import Pesquisa from '../../components/inputs/Pesquisa'
import Tabela from '../../components/tabela/TabelaSimples'
import Paginacao from '../../components/paginacao/Paginacao'

import { connect } from 'react-redux'
import * as actions from '../../actions/categorias'
import { Link } from 'react-router-dom'

class Categorias extends Component {

    getCategorias() {
        const { usuario } = this.props
        if (!usuario) return null
        this.props.getCategorias(usuario.loja)
    }

    componentDidMount() {
        this.getCategorias()
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.usuario && this.props.usuario) this.getCategorias()
    }

    renderBotaoNovo() {
        return (
            <Link
                className='button button-success button-small'
                to='/categorias/nova'
            >
                <i className='fas fa-plus'></i>
                <span>&nbsp; Nova Categoria</span>
            </Link>
        )
    }


    render() {

        const { categorias } = this.props

        let dados = (categorias || []).map((item) => ({
            'Categorias': item.nome,
            'Qtd. de Produtos': item.produtos.length,
            'botaoDeDetalhes': `/categoria/${item._id}`
        }))

        return (
            <div className='Categorias full-width'>
                <div className='Card'>
                    <Titulo tipo='h1' titulo='Categorias' />
                    <br />
                    {
                        this.renderBotaoNovo()
                    }
                    <br /> <br />
                    <Tabela
                        cabecalho={['Categorias', 'Qtd. de Produtos']}
                        dados={dados}
                    />

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    categorias: state.categoria.categorias,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(Categorias)
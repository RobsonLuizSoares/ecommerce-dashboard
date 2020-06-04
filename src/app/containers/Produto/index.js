import React, { Component } from 'react'

import DetalhesProduto from './DetalhesProduto'
import DetalhesVariacao from '../Produto/DetalhesVariacoes'

import { connect } from 'react-redux'

import * as actionsProdutos from '../../actions/produtos'
import * as actionsCategorias from '../../actions/categorias'

class Produto extends Component {


    componentDidMount() {
        const { usuario, getProduto, getCategorias } = this.props
        if (!usuario) return

        const { id } = this.props.match.params

        getProduto(id, usuario.loja)
        getCategorias(usuario.loja)
    }

    render() {
        return (
            <div className='Produto full-width flex vertical'>
                <div className='Card'>
                    <DetalhesProduto history={this.props.history} />
                </div>
                <div >
                    <DetalhesVariacao />
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, { ...actionsProdutos, ...actionsCategorias })(Produto)
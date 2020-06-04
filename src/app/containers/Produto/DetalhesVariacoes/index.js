import React, { Component } from 'react'

import Variacoes from './Variacoes'
import OpcaoVariacao from './OpcaoVariacao'
import NovaVariacao from './NovaVariacao'

import { connect } from 'react-redux'


class DetalhesVariacoes extends Component {
    render() {
        return (
            <div className='Detalhes-Variacoes flex'>
                <div className='Sub-Card flex-1'>
                    <Variacoes />
                </div>
                <div className='Sub-Card flex-9'>
                    {!this.props.variacao ? <NovaVariacao /> : <OpcaoVariacao />}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    variacao: state.variacao.variacao
})

export default connect(mapStateToProps)(DetalhesVariacoes)
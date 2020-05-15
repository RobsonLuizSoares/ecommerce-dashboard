import React, { Component } from 'react'

import Variacoes from './Variacoes'
import OpcaoVariacao from './OpcaoVariacao'


class DetalhesVariacoes extends Component {
    render() {
        return (
            <div className='Detalhes-Variacoes flex'>
                <div className='Sub-Card flex-1'>
                    <Variacoes />
                </div>
                <div className='Sub-Card flex-9'>
                    <OpcaoVariacao />
                </div>
            </div>
        )
    }
}

export default DetalhesVariacoes
import React, { Component } from 'react'

import DetalhesProduto from './DetalhesProduto'
import DetalhesVariacao from '../Produto/DetalhesVariacoes'

class Produto extends Component {
    render() {
        return (
            <div className='PRoduto full-width flex vertical'>
                <div className='Card'>
                    <DetalhesProduto />
                </div>
                <div >
                    <DetalhesVariacao />
                </div>

            </div>
        )
    }
}

export default Produto
import React, { Component } from 'react'

import DetalhesCategoria from './DetalhesCategoria'
import ListaDeProdutos from './ListaDeProdutos'

class Categoria extends Component {
    render() {
        return (
            <div className='Categoria full-width'>
                <div className='Card'>
                    <div>
                        <DetalhesCategoria />
                    </div>
                    <div>
                        <ListaDeProdutos />
                    </div>

                </div>
            </div>
        )
    }
}

export default Categoria
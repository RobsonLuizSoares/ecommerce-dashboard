import React, { Component } from 'react'
import Voltar from '../../components/links/Voltar'
import Titulo from '../../components/texto/Titulo'
import ButtonSimples from '../../components/button/Simples'

class Avaliacao extends Component {

    renderCabecalho() {
        return (
            <div className='flex'>
                <div>
                    <Titulo tipo='h3' titulo='Avaliação - Produto 1' />
                    <Titulo tipo='h4' titulo='Cliente - Cliente 1' />
                </div>
                <div className='flex flex-1 flex-end'>
                    <ButtonSimples
                        type='danger'
                        onClick={() => alert('deletado')}
                        label='Remover'
                    />
                </div>
            </div>
        )
    }

    renderMensagem() {
        return (
            <div className='Mensagem'>
                FADSKFAKSDFKASDFKKASDFASDKF ANSDFOADNJSFONJADF ADFOAFOLANFASFD
            </div>
        )
    }


    render() {
        return (
            <div className='Avaliacao'>
                <div className='Card'>
                    <Voltar path='/avaliacoes/dsfasdfgr' />
                    {this.renderCabecalho()}
                    {this.renderMensagem()}
                </div>
            </div>
        )
    }
}

export default Avaliacao
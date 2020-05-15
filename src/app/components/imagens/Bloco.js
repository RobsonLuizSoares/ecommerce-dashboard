import React, { Component } from 'react'
import Titulo from '../texto/Titulo'

class BlocoImagem extends Component {

    render() {
        const { handleSubmit, imagens, onRemove } = this.props
        return (
            <div className='Bloco-Imagem'>
                <div className='flex horizontal' >
                    <Titulo tipo='h4' titulo='Imagens' />
                </div>
                <div className='flex vertical' >
                    <label><strong>Insira aqui uma nova imagem: &nbsp;</strong></label>
                    <input
                        type='file'
                        onChange={handleSubmit}
                    />
                </div>
                <hr /><br />
                <div className='imagens-container'>
                    {
                        imagens.map((src, idx) => (
                            <div
                                className='imagem-container flex flex-center'
                                style={{ backgroundImage: `url("${src}")` }}
                                key={idx}
                            >
                                <div className='imagem-remover flex flex-center' onClick={() => onRemove(idx)}>
                                    <span>{"-"}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default BlocoImagem
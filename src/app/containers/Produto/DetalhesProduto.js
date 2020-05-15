import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Titulo from '../../components/texto/Titulo'
import ButtonSimples from '../../components/button/Simples'
import TextoDados from '../../components/texto/Dados'
import InputValor from '../../components/inputs/InputValor'
import InputSelect from '../../components/inputs/Select'
import BlocoImagens from '../../components/imagens/Bloco'
import Voltar from '../../components/links/Voltar'


class DetalhesProduto extends Component {

    state = {
        nome: 'Produto 1',
        disponibilidade: 'disponivel',
        descricao: '',
        imagens: [
            " https://dummyimage.com/100x100/ff9900/000222.jpg",
            " https://dummyimage.com/100x100/ff9900/000222.jpg",
            " https://dummyimage.com/100x100/ff9900/000222.jpg",
            " https://dummyimage.com/100x100/ff9900/000222.jpg",
            " https://dummyimage.com/100x100/ff9900/000222.jpg",
            " https://dummyimage.com/100x100/ff9900/000222.jpg"
        ]
    }

    renderCabecalho() {
        const { nome } = this.state
        return (
            <div className='flex'>
                <div className='flex flex-1 vertical'>
                    <Titulo tipo='h1' titulo={nome} />
                    <Link to='/avaliacoes/IKNDSLD'><small>Avaliações</small></Link>
                </div>
                <div className='flex flex-end'>
                    <ButtonSimples
                        type='success'
                        label='salvar'
                        onClick={() => alert('Salvo')}
                    />
                </div>
            </div>
        )
    }

    renderDados() {
        const { nome, disponibilidade, descricao } = this.state
        return (
            <div className='Dados-Produtos'>
                <TextoDados
                    chave='Nome'
                    valor={(
                        <InputValor
                            value={nome} noStyle
                            name='nome'
                            handleSubmit={(valor) => this.setState({ nome: valor })}
                        />
                    )}
                />
                <TextoDados
                    chave='Disponibilidade'
                    valor={(
                        <InputSelect
                            name='disponibilidade'
                            onChange={(ev) => this.setState({ disponibilidade: ev.target.value })}
                            value={disponibilidade}
                            opcoes={[
                                { label: 'Disponível', value: 'disponivel' },
                                { label: 'Indisponível', value: 'indisponivel' }
                            ]}
                        />
                    )}
                />
                <br />
                <TextoDados
                    chave='Descrição'
                    vertical
                    valor={(
                        <textarea
                            name={'descricao'}
                            onChange={(ev) => this.setState({ descricao: ev.target.value })}
                            value={descricao}
                            rows='6'
                            style={{ resize: 'none' }}
                        />
                    )}
                />
            </div>
        )
    }

    onRemove = (id) => {
        const { imagens } = this.state
        this.setState({ imagens: imagens.filter((i, idx) => idx !== id) })
    }

    renderImagens() {
        const { imagens } = this.state
        return (
            <div className='Dados-de-Imagens'>
                <BlocoImagens
                    imagens={imagens}
                    handleSubmit={() => alert('enviado')}
                    onRemove={this.onRemove}
                />
            </div>
        )
    }


    render() {
        return (
            <div className='Detalhes-do-Produto'>
                <Voltar path='/produtos' />
                {this.renderCabecalho()}
                <br />
                <div className='flex horizontal'>
                    <div className='flex-1 flex vertical'>
                        {this.renderDados()}
                    </div>
                    <div className='flex-1 flex vertical'>
                        {this.renderImagens()}
                    </div>

                </div>


            </div>


        )
    }
}

export default DetalhesProduto
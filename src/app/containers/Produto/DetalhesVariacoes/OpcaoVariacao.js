import React, { Component } from 'react'
import Titulo from '../../../components/texto/Titulo'
import ButtonSimples from '../../../components/button/Simples'
import InputValor from '../../../components/inputs/InputValor'
import InputSelect from '../../../components/inputs/Select'
import TextoDados from '../../../components/texto/Dados'
import BlocoImagens from '../../../components/imagens/Bloco'

class OpcapVariacao extends Component {
    state = {
        nome: 'P',
        disponibilidade: 'disponivel',
        preco: 30,
        promocao: 25,
        quantidade: 200,
        peso: 0.750,
        largura: 3,
        altura: 5,
        comprimento: 17,
        imagens: [
            " https://dummyimage.com/100x100/99ff00/000222.jpg",
            " https://dummyimage.com/100x100/99ff00/000222.jpg",
            " https://dummyimage.com/100x100/99ff00/000222.jpg",
            " https://dummyimage.com/100x100/99ff00/000222.jpg",
            " https://dummyimage.com/100x100/99ff00/000222.jpg",
            " https://dummyimage.com/100x100/99ff00/000222.jpg"
        ]
    }

    renderCabecalho() {
        const { nome } = this.state
        return (
            <div className='flex horizontal'>
                <div className='flex-1'>
                    <Titulo
                        tipo='h3'
                        titulo={"Variação -" + nome}
                    />
                </div>
                <div className='flex1 flex flex-end'>
                    <ButtonSimples
                        type='success'
                        label='Salvar'
                        onClick={() => alert('Salvo')}
                    />
                </div>
            </div>
        )
    }

    renderDadosCadastrais() {
        const { nome, disponibilidade, preco, promocao, quantidade } = this.state
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
                <TextoDados
                    chave='Preço Padrão'
                    valor={(
                        <InputValor
                            value={preco} noStyle
                            name='preco'
                            type='number'
                            handleSubmit={(valor) => this.setState({ preco: Number(valor) })}
                        />
                    )}
                />
                <TextoDados
                    chave='Preço Promocional'
                    valor={(
                        <InputValor
                            value={promocao} noStyle
                            name='promocao'
                            type='number'
                            handleSubmit={(valor) => this.setState({ promocao: Number(valor) })}
                        />
                    )}
                />
                <TextoDados
                    chave='Quantidade'
                    valor={(
                        <InputValor
                            value={quantidade} noStyle
                            name='quantidade'
                            handleSubmit={(valor) => this.setState({ quantidade: valor })}
                        />
                    )}
                />

            </div>
        )
    }

    renderDadosEnvio() {
        const { peso, largura, comprimento, altura } = this.state
        return (
            <div className='Dados-Produtos'>
                <TextoDados
                    chave='Peso (kg)'
                    valor={(
                        <InputValor
                            value={peso} noStyle
                            name='peso'
                            type='number'
                            handleSubmit={(valor) => this.setState({ peso: Number(valor) })}
                        />
                    )}
                />
                <TextoDados
                    chave='Largura (cm)'
                    valor={(
                        <InputValor
                            value={largura} noStyle
                            name='largura'
                            type='number'
                            handleSubmit={(valor) => this.setState({ largura: Number(valor) })}
                        />
                    )}
                />
                <TextoDados
                    chave='Comprimento (cm)'
                    valor={(
                        <InputValor
                            value={comprimento} noStyle
                            name='comprimento'
                            type='number'
                            handleSubmit={(valor) => this.setState({ comprimento: Number(valor) })}
                        />
                    )}
                />
                <TextoDados
                    chave='Altura (cm)'
                    valor={(
                        <InputValor
                            value={altura} noStyle
                            name='altura'
                            type='number'
                            handleSubmit={(valor) => this.setState({ altura: Number(valor) })}
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
            <div className='Opcao-Variacao'>
                {this.renderCabecalho()}
                <br />
                <div className='flex horizontal'>
                    <div className='flex-1'>
                        {this.renderDadosCadastrais()}
                    </div>
                    <div className='flex-1'>
                        {this.renderDadosEnvio()}
                    </div>
                    <div className='flex-1'>
                        {this.renderImagens()}
                    </div>
                </div>

            </div>
        )
    }
}

export default OpcapVariacao
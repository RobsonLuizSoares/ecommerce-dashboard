import React, { Component } from 'react'

import Titulo from '../../components/texto/Titulo'
import InputValor from '../../components/inputs/InputValor'
import ButtonSimples from '../../components/button/Simples'
import TextoDados from '../../components/texto/Dados'
import InputSelect from '../../components/inputs/Select'
import Voltar from '../../components/links/Voltar'


class DetalhesCategoria extends Component {

    state = {
        nome: "Categoria",
        disponibilidade: "disponivel",
        codigo: "categorias"
    }

    renderCabecalho() {
        const { nome } = this.state
        return (
            <div className='flex'>
                <div className='flex flex-1 '>
                    <Titulo tipo='h1' titulo={nome} />
                </div>
                <div className='flex flex-1 flex-end'>
                    <ButtonSimples
                        onClick={() => alert('Salvo')}
                        type='success'
                        label='Salvar'
                    />
                    <ButtonSimples
                        onClick={() => alert('removido')}
                        type='danger'
                        label='Remover'
                    />
                </div>
            </div>
        )
    }

    renderDados() {
        const { nome, disponibilidade, codigo } = this.state
        return (
            <div>
                <TextoDados
                    chave='Código'
                    valor={(
                        <InputValor
                            name='codigo' noStyle
                            value={codigo}
                            handleSubmit={(valor) => this.setState({ codigo: valor })}
                        />
                    )}
                />
                <TextoDados
                    chave='Nome'
                    valor={(
                        <InputValor
                            name='nome' noStyle
                            value={nome}
                            handleSubmit={(valor) => this.setState({ nome: valor })}
                        />
                    )}
                />
                <br />
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
            </div>
        )
    }

    render() {
        return (
            <div className='Detalhes-Categoria'>
                <Voltar path='/categorias' />
                {this.renderCabecalho()}
                {this.renderDados()}
            </div>
        )
    }
}

export default DetalhesCategoria
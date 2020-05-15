import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import ButtonSimples from '../../components/button/Simples'
import TextoDados from '../../components/texto/Dados'
import InputValor from '../../components/inputs/InputValor'
import Voltar from '../../components/links/Voltar'

class DetalhesDoCliente extends Component {

    state = {
        nome: "Cliente 1",
        CPF: "290.732.228-18",
        telefone: "48 98427-0306",
        dataDeNascimento: "11/11/1980",
        email: "cliente1@gmail.com",

        endereco: "Rua Teste, 123",
        bairro: "Centro",
        cidade: "Florianópolis",
        estado: "SC",
        cep: "88036-050"
    }
    handleSubmit = (field, value) => {
        this.setState({ [field]: value })
    }
    renderCabecalho() {
        const { nome } = this.state
        return (
            <div className='flex'>
                <div className='flex flex-1'>
                    <Titulo tipo='h1' titulo={nome} />
                </div>
                <div className='flex flex-1 flex-end'>
                    <ButtonSimples
                        onClick={() => alert('Salvo')}
                        label='Salvar'
                        type='success'
                    />
                    <ButtonSimples
                        onClick={() => alert('Removido!')}
                        label='Remover'
                        type='danger'
                    />
                </div>
            </div>
        )
    }

    renderDetalhesCadastro() {
        const { nome, CPF, email, telefone, dataDeNascimento } = this.state
        return (
            <div className='Detalhes-do-Cadastro'>
                <TextoDados chave='Nome'
                    valor={(
                        <InputValor
                            name='nome' noStyle
                            handleSubmit={(valor) => this.handleSubmit('nome', valor)}
                            value={nome}
                        />
                    )}
                />
                <TextoDados chave='CPF'
                    valor={(
                        <InputValor
                            name='cpf' noStyle
                            handleSubmit={(valor) => this.handleSubmit('CPF', valor)}
                            value={CPF}
                        />
                    )}
                />
                <TextoDados chave='Telefone'
                    valor={(
                        <InputValor
                            name='telefone' noStyle
                            handleSubmit={(valor) => this.handleSubmit('telefone', valor)}
                            value={telefone}
                        />
                    )}
                />
                <TextoDados chave='E-mail'
                    valor={(
                        <InputValor
                            name='email' noStyle
                            handleSubmit={(valor) => this.handleSubmit('email', valor)}
                            value={email}
                        />
                    )}
                />
                <TextoDados chave='Data de Nascimento'
                    valor={(
                        <InputValor
                            name='dataDeNascimento' noStyle
                            handleSubmit={(valor) => this.handleSubmit('dataDeNascimento', valor)}
                            value={dataDeNascimento}
                        />
                    )}
                />
            </div>
        )
    }

    renderDetalhesEntrega() {
        const { endereco, bairro, cep, cidade, estado } = this.state
        return (
            <div className='Detalhes-da-Entrega'>
                <TextoDados chave='Endereço'
                    valor={(
                        <InputValor
                            name='Endereco' noStyle
                            handleSubmit={(valor) => this.handleSubmit('endereco', valor)}
                            value={endereco}
                        />
                    )}
                />
                <TextoDados chave='Bairro'
                    valor={(
                        <InputValor
                            name='bairro' noStyle
                            handleSubmit={(valor) => this.handleSubmit('bairro', valor)}
                            value={bairro}
                        />
                    )}
                />
                <TextoDados chave='Cidade'
                    valor={(
                        <InputValor
                            name='cidade' noStyle
                            handleSubmit={(valor) => this.handleSubmit('cidade', valor)}
                            value={cidade}
                        />
                    )}
                />
                <TextoDados chave='Estado'
                    valor={(
                        <InputValor
                            name='estado' noStyle
                            handleSubmit={(valor) => this.handleSubmit('estado', valor)}
                            value={estado}
                        />
                    )}
                />
                <TextoDados chave='CEP'
                    valor={(
                        <InputValor
                            name='cep' noStyle
                            handleSubmit={(valor) => this.handleSubmit('cep', valor)}
                            value={cep}
                        />
                    )}
                />
            </div>
        )
    }

    render() {
        return (
            <div className='DetalhesDoCliente'>
                <Voltar path='/clientes' />
                {this.renderCabecalho()}
                <div className='flex horizontal'>
                    <div className='flex flex-1 vertical'>
                        {this.renderDetalhesCadastro()}
                    </div>
                    <div className='flex flex-1 vertical'>
                        {this.renderDetalhesEntrega()}
                    </div>
                </div>
            </div>
        )
    }
}

export default DetalhesDoCliente
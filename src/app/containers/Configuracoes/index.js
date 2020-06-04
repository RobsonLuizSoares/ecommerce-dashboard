import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import ButtonSimples from '../../components/button/Simples'
import TextoDados from '../../components/texto/Dados'
import InputValor from '../../components/inputs/InputValor'
import ListaDinamicaSimples from '../../components/listas/ListaDinamicaSimples'

import AlertGeral from '../../components/Alert/Geral'
import { connect } from 'react-redux'
import * as actions from '../../actions/configuracoes'

class Configuracoes extends Component {

    generateStateConfiguracao = (props) => ({

        nome: props.loja ? props.loja.nome : '',
        cnpj: props.loja ? props.loja.cnpj : '',
        email: props.loja ? props.loja.email : '',

        endereco: props.loja ? props.loja.endereco.local : '',
        numero: props.loja ? props.loja.endereco.numero : '',
        bairro: props.loja ? props.loja.endereco.bairro : '',
        cidade: props.loja ? props.loja.endereco.cidade : '',
        estado: props.loja ? props.loja.endereco.estado : '',
        cep: props.loja ? props.loja.endereco.cep : '',

        telefones: props.loja ? props.loja.telefones : []

    })
    state = {
        ...this.generateStateConfiguracao(this.props),
        aviso: null,
        erros: {}
    }

    getConfiguracao(props) {
        const { usuario } = props
        if (!usuario) return null
        this.props.getConfiguracao(usuario.loja)
    }

    componentDidMount() {
        this.getConfiguracao(this.props)
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.usuario && this.props.usuario) this.getConfiguracao(this.props)
        if (!prevProps.loja && this.props.loja) this.setState(this.generateStateConfiguracao(this.props))
    }

    validate() {
        const { nome, cnpj, email, endereco, numero, bairro, cidade, estado, cep } = this.state
        const erros = {}

        if (!nome) erros.nome = 'Preencha aqui com o nome da loja'
        if (!cnpj) erros.cnpj = 'Preencha aqui com o cnpj da loja'
        if (!email) erros.email = 'Preencha aqui com o email da loja'
        if (!endereco) erros.endereco = 'Preencha aqui com o endereco da loja'
        if (!numero) erros.numero = 'Preencha aqui com o numero da loja'
        if (!bairro) erros.bairro = 'Preencha aqui com o bairro da loja'
        if (!cidade) erros.cidade = 'Preencha aqui com a cidade da loja'
        if (!estado) erros.estado = 'Preencha aqui com o estado da loja'
        if (!cep) erros.cep = 'Preencha aqui com o cep da loja'

        this.setState({ erros })
        return !(Object.keys(erros).length > 0)
    }

    updateLoja() {
        const { usuario } = this.props
        if (!usuario || !this.validate()) return null
        this.props.updateConfiguracao(this.state, usuario.loja, (error) => {
            this.setState({
                aviso: {
                    status: !error,
                    msg: error ? error.message : 'Configuração da loja atualizada com sucesso'
                }
            })
        })
    }



    renderCabecalho() {
        return (
            <div className='flex'>
                <div className='flex-1 flex'>
                    <Titulo tipo='h1' titulo='Configurações' />
                </div>
                <div className='flex-1 flex flex-end'>
                    <ButtonSimples
                        type='success'
                        label='Salvar'
                        onClick={() => { this.updateLoja() }}
                    />
                </div>
            </div>
        )
    }

    handleSubmit = (field, value) => this.setState({ [field]: value }, () => this.validate())

    renderDadosConfiguracao() {
        const { nome, cnpj, email, erros } = this.state
        return (
            <div className='dados-configuracao'>
                <TextoDados
                    chave='Nome'
                    valor={(
                        <InputValor
                            value={nome}
                            erro={erros.nome}
                            name='nome' noStyle
                            handleSubmit={(valor) => this.handleSubmit('nome', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='CNPJ'
                    valor={(
                        <InputValor
                            value={cnpj}
                            erro={erros.cnpj}
                            name='cnpj' noStyle
                            handleSubmit={(valor) => this.handleSubmit('cnpj', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='E-mail'
                    valor={(
                        <InputValor
                            value={email}
                            erro={erros.email}
                            name='email' noStyle
                            handleSubmit={(valor) => this.handleSubmit('email', valor)}
                        />
                    )}
                />
            </div>
        )
    }

    renderDadosEndereco() {
        const { endereco, numero, bairro, cidade, estado, cep, erros } = this.state
        return (
            <div className='dados-configuracao'>
                <TextoDados
                    chave='Endereço'
                    valor={(
                        <InputValor
                            value={endereco}
                            erro={erros.endereco}
                            name='endereco' noStyle
                            handleSubmit={(valor) => this.handleSubmit('endereco', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='Número'
                    valor={(
                        <InputValor
                            value={numero}
                            erro={erros.numero}
                            name='numero' noStyle
                            handleSubmit={(valor) => this.handleSubmit('numero', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='Bairro'
                    valor={(
                        <InputValor
                            value={bairro}
                            erro={erros.bairro}
                            name='bairro' noStyle
                            handleSubmit={(valor) => this.handleSubmit('bairro', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='Cidade'
                    valor={(
                        <InputValor
                            value={cidade}
                            erro={erros.cidade}
                            name='cidade' noStyle
                            handleSubmit={(valor) => this.handleSubmit('cidade', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='Estado'
                    valor={(
                        <InputValor
                            value={estado}
                            erro={erros.estado}
                            name='estado' noStyle
                            handleSubmit={(valor) => this.handleSubmit('estado', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='CEP'
                    valor={(
                        <InputValor
                            value={cep}
                            name='cep' noStyle
                            erro={erros.cep}
                            handleSubmit={(valor) => this.handleSubmit('cep', valor)}
                        />
                    )}
                />
            </div>
        )
    }

    onAdd = (valor) => {
        if (!valor) return
        const { telefones } = this.state
        this.setState({ telefones: [...telefones, valor] })
    }

    onRemove = (idx) => {
        if (idx === undefined) return
        const { telefones } = this.state
        this.setState({ telefones: telefones.filter((item, index) => index !== idx) })
    }
    renderTelefones() {
        const { telefones } = this.state
        return (
            <div className='dados-telefones' >
                <Titulo tipo='h3' titulo='Telefones' />
                <ListaDinamicaSimples
                    dados={telefones}
                    onAdd={this.onAdd}
                    onRemove={this.onRemove}
                />

            </div>
        )
    }


    render() {
        return (
            <div className='Configuracoes full-width'>
                <div className='Card'>
                    {this.renderCabecalho()}
                    <AlertGeral aviso={this.state.aviso} />
                    <div className='flex horizontal'>
                        <div className='flex-1'>
                            {this.renderDadosConfiguracao()}
                        </div>
                    </div>
                    <br /><hr /> <br />
                    <div className='flex horizontal'>
                        <div className='flex-1'>
                            {this.renderDadosEndereco()}
                        </div>
                        <div className='flex-1'>
                            {this.renderTelefones()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loja: state.configuracao.loja,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(Configuracoes)
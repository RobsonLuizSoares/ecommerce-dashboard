import React, { Component } from 'react'

import Titulo from '../../components/texto/Titulo'
import InputValor from '../../components/inputs/InputValor'
import ButtonSimples from '../../components/button/Simples'
import TextoDados from '../../components/texto/Dados'
import InputSelect from '../../components/inputs/Select'
import Voltar from '../../components/links/Voltar'

import { connect } from 'react-redux'
import * as actions from '../../actions/categorias'
import AlertGeral from '../../components/Alert/Geral'


class DetalhesCategoria extends Component {


    generateStateCategoria = (props) => ({
        nome: props.categoria ? props.categoria.nome : "",
        disponibilidade: props.categoria ?
            (props.categoria.disponibilidade ||
                props.categoria.disponibilidade === undefined) ? "disponivel" : "indisponivel" : "",
        codigo: props.categoria ? props.categoria.codigo : ""
    })

    constructor(props) {
        super()
        this.state = {
            ...this.generateStateCategoria(props),
            erros: {},
            aviso: null
        }
    }

    componentDidUpdate(prevProps) {
        if (
            (!prevProps.categoria && this.props.categoria) ||
            (prevProps.categoria && this.props.categoria && prevProps.categoria.updatedAt !== this.props.categoria.updatedAt)
        ) this.setState(this.generateStateCategoria(this.props))
    }
    salvarCategoria() {
        const { usuario, categoria } = this.props
        if (!usuario || !categoria) return null

        if (!this.validate()) return null

        this.props.updateCategoria(this.state, categoria._id, usuario.loja, (error) => {
            this.setState({
                aviso: {
                    status: !error,
                    msg: error ? error.message : 'Categoria atualizada com sucesso'
                }
            })
        })
    }

    removerCategoria() {
        const { usuario, categoria } = this.props
        if (!usuario || !categoria) return null

        if (!window.confirm('Você realmente deseja remover essa categoria')) return

        this.props.removerCategoria(categoria._id, usuario.loja, (error) => {
            if (error) this.setState({ aviso: { status: false, msg: error.message } })
            else this.props.history.goBack()
        })
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
                        onClick={() => this.salvarCategoria()}
                        type='success'
                        label='Salvar'
                    />
                    <ButtonSimples
                        onClick={() => this.removerCategoria()}
                        type='danger'
                        label='Remover'
                    />
                </div>
            </div>
        )
    }

    onChangeInput = (field, value) => this.setState({ [field]: value }, () => this.validate())

    validate() {
        const { nome, codigo } = this.state
        const erros = {}

        if (!nome) erros.nome = 'Preencha com o nome da Categoria'
        if (!codigo) erros.codigo = 'Preencha com o código da Categoria'
        if (codigo && codigo.length < 3) erros.codigo = 'Preencha com mais que 3 caracteres'
        if (codigo && codigo.indexOf(' ') !== -1) erros.codigo = 'Favor não deixar espaços no código'

        this.setState({ erros })
        return !(Object.keys(erros).length > 0)
    }

    renderDados() {
        const { nome, disponibilidade, codigo, erros } = this.state
        return (
            <div>
                <TextoDados
                    chave='Código'
                    valor={(
                        <InputValor
                            name='codigo' noStyle
                            value={codigo}
                            erro={erros.codigo}
                            handleSubmit={(valor) => this.onChangeInput('codigo', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='Nome'
                    valor={(
                        <InputValor
                            name='nome' noStyle
                            value={nome}
                            erro={erros.nome}
                            handleSubmit={(valor) => this.onChangeInput('nome', valor)}
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
                <Voltar history={this.props.history} />
                <AlertGeral aviso={this.state.aviso} />
                {this.renderCabecalho()}
                {this.renderDados()}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    categoria: state.categoria.categoria,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(DetalhesCategoria)


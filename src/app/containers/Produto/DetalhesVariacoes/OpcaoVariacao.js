import React, { Component } from 'react'
import Titulo from '../../../components/texto/Titulo'
import ButtonSimples from '../../../components/button/Simples'
import InputValor from '../../../components/inputs/InputValor'
import InputSelect from '../../../components/inputs/Select'
import TextoDados from '../../../components/texto/Dados'
import BlocoImagens from '../../../components/imagens/Bloco'
import AlertGeral from '../../../components/Alert/Geral'

import { connect } from 'react-redux'

import * as actions from '../../../actions/variacoes'

class OpcapVariacao extends Component {

    generateStateVariacao = (props) => ({
        codigo: props.variacao ? props.variacao.codigo : '',
        nome: props.variacao ? props.variacao.nome : '',
        preco: props.variacao ? props.variacao.preco : 0,
        promocao: props.variacao ? props.variacao.promocao : 0,
        quantidade: props.variacao ? props.variacao.quantidade : 0,
        peso: props.variacao ? props.variacao.entrega.pesoKg : 0,
        freteGratis: props.variacao ? (props.variacao.entrega.freteGratis ? 'sim' : 'nao') : '',
        largura: props.variacao ? props.variacao.entrega.dimensoes.larguraCm : 0,
        altura: props.variacao ? props.variacao.entrega.dimensoes.alturaCm : 0,
        comprimento: props.variacao ? props.variacao.entrega.dimensoes.profundidadeCm : 0,
        fotos: props.variacao ? props.variacao.fotos : [],
    })

    constructor(props) {
        super()
        this.state = {
            ...this.generateStateVariacao(props),
            aviso: null,
            erros: {}
        }
    }

    componentDidUpdate(prevProps) {
        if (
            (!prevProps.variacao && this.props.variacao) ||
            (prevProps.variacao && this.props.variacao &&
                prevProps.variacao.updatedAt !== this.props.variacao.updatedAt)
        ) this.setState(this.generateStateVariacao(this.props))
    }

    componentWillUnmount() {
        this.props.limparVariacao()
    }

    onChangeInput = (field, value) => this.setState({ [field]: value }, () => this.validate())

    validate() {
        const { codigo, nome, preco, quantidade, peso, largura, altura, comprimento } = this.state
        const erros = {}

        if (!codigo) erros.codigo = 'Preencha aqui com o código da variação'
        if (!nome) erros.nome = 'Preencha aqui com o nome da variação'
        if (!preco) erros.preco = 'Preencha aqui com o preço da variação'
        if (!quantidade) erros.quantidade = 'Preencha aqui com a quantidade da variação'
        if (!peso) erros.peso = 'Preencha aqui com o peso da variação'
        if (!largura) erros.largura = 'Preencha aqui com a largura da variação'
        if (!altura) erros.altura = 'Preencha aqui com a altura da variação'
        if (!comprimento) erros.comprimento = 'Preencha aqui com o comprimento da variação'

        this.setState({ erros })
        return !(Object.keys(erros).length > 0)

    }

    updateVariacao() {
        const { usuario, produto, variacao } = this.props
        if (!usuario || !produto || !variacao || !this.validate()) return null
        this.props.updateVariacao(this.state, variacao._id, produto._id, usuario.loja, (error) => {
            this.setState({
                aviso: {
                    status: !error,
                    msg: error ? error.message : 'Variação atualizada com sucesso'
                }
            })
            this.props.getVariacoes(produto._id, usuario.loja)
        })
    }

    removeVariacao() {
        const { usuario, produto, variacao } = this.props
        if (!usuario || !produto || !variacao) return null
        if (window.confirm('Deseja realmente apagar essa variação do produto?')) {
            this.props.removeVariacao(variacao._id, produto._id, usuario.loja, (error) => {
                this.setState({
                    aviso: {
                        status: !error,
                        msg: error ? error.message : 'Variação removida com sucesso'
                    }
                })
                this.props.getVariacoes(produto._id, usuario.loja)
            })
        }
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
                        onClick={() => this.updateVariacao()}
                    />
                    <ButtonSimples
                        type='danger'
                        label='Remover'
                        onClick={() => this.removeVariacao()}
                    />
                </div>
            </div>
        )
    }

    renderDadosCadastrais() {
        const { nome, codigo, preco, promocao, quantidade, erros } = this.state
        return (
            <div className='Dados-Produtos'>
                <TextoDados
                    chave='Código'
                    valor={(
                        <InputValor
                            value={codigo} noStyle
                            erro={erros.codigo}
                            name='codigo'
                            handleSubmit={(valor) => this.onChangeInput('codigo', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='Nome'
                    valor={(
                        <InputValor
                            value={nome} noStyle
                            erro={erros.nome}
                            name='nome'
                            handleSubmit={(valor) => this.onChangeInput('nome', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='Preço Padrão'
                    valor={(
                        <InputValor
                            value={preco} noStyle
                            erro={erros.preco}
                            name='preco'
                            type='number'
                            handleSubmit={(valor) => this.onChangeInput('preco', Number(valor))}
                        />
                    )}
                />
                <TextoDados
                    chave='Preço Promocional'
                    valor={(
                        <InputValor
                            value={promocao} noStyle
                            erro={erros.promocao}
                            name='promocao'
                            type='number'
                            handleSubmit={(valor) => this.onChangeInput('promocao', Number(valor))}
                        />
                    )}
                />
                <TextoDados
                    chave='Quantidade'
                    valor={(
                        <InputValor
                            value={quantidade} noStyle
                            erro={erros.quantidade}
                            type='number'
                            name='quantidade'
                            handleSubmit={(valor) => this.onChangeInput('quantidade', valor)}
                        />
                    )}
                />

            </div>
        )
    }

    renderDadosEnvio() {
        const { peso, freteGratis, largura, comprimento, altura, erros } = this.state
        return (
            <div className='Dados-Produtos'>
                <TextoDados
                    chave='Peso (kg)'
                    valor={(
                        <InputValor
                            value={peso} noStyle
                            name='peso'
                            erro={erros.peso}
                            type='number'
                            handleSubmit={(valor) => this.onChangeInput('peso', Number(valor))}
                        />
                    )}
                />
                <TextoDados
                    chave='Frete Grátis'
                    valor={(
                        <InputSelect
                            name='freteGratis'
                            onChange={(ev) => this.onChangeInput('freteGratis', ev.target.value)}
                            value={freteGratis}
                            opcoes={[
                                { label: 'Sim', value: 'sim' },
                                { label: 'Não', value: 'nao' }
                            ]}
                        />
                    )}
                />
                <TextoDados
                    chave='Largura (cm)'
                    valor={(
                        <InputValor
                            value={largura} noStyle
                            erro={erros.largura}
                            name='largura'
                            type='number'
                            handleSubmit={(valor) => this.onChangeInput('largura', Number(valor))}
                        />
                    )}
                />
                <TextoDados
                    chave='Comprimento (cm)'
                    valor={(
                        <InputValor
                            value={comprimento} noStyle
                            erro={erros.comprimento}
                            name='comprimento'
                            type='number'
                            handleSubmit={(valor) => this.onChangeInput('comprimento', Number(valor))}
                        />
                    )}
                />
                <TextoDados
                    chave='Altura (cm)'
                    valor={(
                        <InputValor
                            value={altura} noStyle
                            erro={erros.altura}
                            name='altura'
                            type='number'
                            handleSubmit={(valor) => this.onChangeInput('altura', Number(valor))}
                        />
                    )}
                />
            </div>
        )
    }

    onRemove = (id) => {
        const { usuario, produto, variacao } = this.props
        if (!usuario || !produto || !variacao) return null

        const { fotos: _fotos } = this.state

        const fotos = _fotos.filter((foto, index) => index !== id)

        if (window.confirm('Deseja realmente remover essa imagem?')) {
            this.props.removeVariacaoImagens(fotos, variacao._id, produto._id, usuario.loja, (error) => {
                this.setState({
                    aviso: {
                        status: !error,
                        msg: error ? error.message : 'Foto da Variação do Produto removida com sucesso!'
                    }
                })
            })
        }
    }

    handleUploadFoto = (ev) => {
        const { usuario, produto, variacao } = this.props
        if (!usuario || !produto || !variacao) return null

        const data = new FormData()

        data.append('files', ev.target.files[0])
        this.props.updateVariacaoImagens(data, variacao._id, produto._id, usuario.loja, (error) => {
            this.setState({
                aviso: {
                    status: !error,
                    msg: error ? error.message : 'Foto da Variação do Produto adicionada com sucesso!'
                }
            })
        })
    }
    renderImagens() {
        const { fotos } = this.state
        return (
            <div className='Dados-de-Imagens'>
                <BlocoImagens
                    imagens={fotos || []}
                    handleSubmit={this.handleUploadFoto}
                    onRemove={this.onRemove}
                />
            </div>
        )
    }

    render() {
        return (
            <div className='Opcao-Variacao'>
                {this.renderCabecalho()}
                <AlertGeral aviso={this.state.aviso} />
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

const mapStateToProps = state => ({
    variacao: state.variacao.variacao,
    produto: state.produto.produto,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(OpcapVariacao)
import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Titulo from '../../components/texto/Titulo'
import ButtonSimples from '../../components/button/Simples'
import TextoDados from '../../components/texto/Dados'
import InputValor from '../../components/inputs/InputValor'
import InputSelect from '../../components/inputs/Select'
import BlocoImagens from '../../components/imagens/Bloco'
import Voltar from '../../components/links/Voltar'

import { connect } from 'react-redux'
import * as actions from '../../actions/produtos'
import AlertGeral from '../../components/Alert/Geral'

class DetalhesProduto extends Component {

    generateStateProduto = (props) => ({
        nome: props.produto ? props.produto.titulo : '',
        disponibilidade: props.produto ? (props.produto.disponibilidade ? 'disponivel' : 'indisponivel') : '',
        descricao: props.produto ? props.produto.descricao : '',
        categoria: props.produto ? (props.produto.categoria._id || props.produto.categoria) : '',
        fotos: props.produto ? props.produto.fotos : '',
        preco: props.produto ? props.produto.preco : '',
        promocao: props.produto ? props.produto.promocao : '',
        sku: props.produto ? props.produto.sku : '',
    })

    constructor(props) {
        super()
        this.state = {
            ...this.generateStateProduto(props),
            aviso: null,
            erros: {}
        }
    }

    componentDidUpdate(prevProps) {
        if (
            (!prevProps.produto && this.props.produto) ||
            (prevProps.produto && this.props.produto &&
                prevProps.produto.updatedAt !== this.props.produto.updatedAt)
        ) this.setState(this.generateStateProduto(this.props))
    }

    validate() {
        const { nome, descricao, categoria, preco, sku } = this.state
        const erros = {}

        if (!nome) erros.nome = 'Preencha aqui com o nome do produto'
        if (!descricao) erros.descricao = 'Preencha aqui com a descrição do produto'
        if (!categoria) erros.categoria = 'Preencha aqui com a categoria do produto'
        if (!preco) erros.preco = 'Preencha aqui com o preco do produto'
        if (!sku) erros.sku = 'Preencha aqui com o sku do produto'

        this.setState({ erros })
        return !(Object.keys(erros).length > 0)

    }
    updateProduto() {
        const { usuario, produto, updateProduto } = this.props
        if (!usuario || !produto || !this.validate()) return null

        updateProduto(this.state, produto._id, usuario.loja, (error) => {
            this.setState({
                aviso: {
                    status: !error, msg: error ? error.message : 'Produto atualizado com sucesso'
                }
            })
        })


    }


    renderCabecalho() {
        const { nome } = this.state
        const { produto } = this.props
        return (
            <div className='flex'>
                <div className='flex flex-1 vertical'>
                    <Titulo tipo='h1' titulo={nome} />
                    {produto && <Link to={`/avaliacoes/${produto._id}`}><small>Ver Avaliações</small></Link>}
                </div>
                <div className='flex flex-end'>
                    <ButtonSimples
                        type='success'
                        label='salvar'
                        onClick={() => this.updateProduto()}
                    />
                </div>
            </div>
        )
    }

    onChangeInput = (field, value) => this.setState({ [field]: value }, () => this.validate())

    renderDados() {
        const { nome, disponibilidade, descricao, categoria, preco, promocao, sku, erros } = this.state
        const { categorias } = this.props
        return (
            <div className='Dados-Produtos'>
                <TextoDados
                    chave='Nome'
                    valor={(
                        <InputValor
                            value={nome} noStyle
                            name='nome'
                            erros={erros.nome}
                            handleSubmit={(valor) => this.onChangeInput('nome', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='Disponibilidade'
                    valor={(
                        <InputSelect
                            name='disponibilidade'
                            onChange={(ev) => this.onChangeInput('disponibilidade', ev.target.value)}
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
                    chave='Categoria'
                    valor={(
                        <InputSelect
                            name='categoria'
                            onChange={(ev) => this.onChangeInput('categoria', ev.target.value)}
                            value={categoria}
                            opcoes={(categorias || []).map((item) => ({ label: item.nome, value: item._id }))}
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
                            onChange={(ev) => this.onChangeInput('descricao', ev.target.value)}
                            value={descricao}
                            rows='6'
                            style={{ resize: 'none' }}
                        />
                    )}
                />
                <TextoDados
                    chave='Preço'
                    valor={(
                        <InputValor
                            value={preco} noStyle
                            name='preco'
                            erros={erros.preco}
                            handleSubmit={(valor) => this.onChangeInput('preco', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='Valor em Promoção'
                    valor={(
                        <InputValor
                            value={promocao} noStyle
                            name='promocao'
                            erros={erros.promocao}
                            handleSubmit={(valor) => this.onChangeInput('promocao', valor)}
                        />
                    )}
                />
                <TextoDados
                    chave='SKU'
                    valor={(
                        <InputValor
                            value={sku} noStyle
                            name='sku'
                            erros={erros.sku}
                            handleSubmit={(valor) => this.onChangeInput('sku', valor)}
                        />
                    )}
                />
            </div>
        )
    }

    onRemove = (id) => {
        const { usuario, produto } = this.props
        if (!usuario || !produto) return null

        const { fotos: _fotos } = this.state

        const fotos = _fotos.filter((foto, index) => index !== id)
        if (window.confirm('Deseja realmente remover essa imagem?')) {
            this.props.removeProdutoImagens(fotos, produto._id, usuario.loja, (error) => {
                this.setState({
                    aviso: {
                        status: !error,
                        msg: error ? error.message : 'Foto do produto removida com sucesso'
                    }
                })
            })
        }
    }

    handleUploadFoto = (ev) => {
        const { usuario, produto } = this.props
        if (!usuario || !produto) return null

        const data = new FormData()
        data.append('files', ev.target.files[0])

        this.props.updateProdutoImagens(data, produto._id, usuario.loja, (error) => {
            this.setState({
                aviso: {
                    status: !error,
                    msg: error ? error.message : 'Fotos do produto atualizadas com sucesso'
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
            <div className='Detalhes-do-Produto'>
                <Voltar history={this.props.history} />
                {this.renderCabecalho()}
                <AlertGeral aviso={this.state.aviso} />
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

const mapStateToProps = state => ({
    produto: state.produto.produto,
    categorias: state.categoria.categorias,
    usuario: state.auth.usuario
})

export default connect(mapStateToProps, actions)(DetalhesProduto)
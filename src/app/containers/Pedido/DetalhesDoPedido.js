import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import TextoDados from '../../components/texto/Dados'
import ButtonSimples from '../../components/button/Simples'
import TabelaSimples from '../../components/tabela/TabelaSimples'

class DetalhesDoPedido extends Component {

    renderCabecalho() {
        return (
            <div className='flex'>
                <div className='flex flex-1'>
                    <Titulo tipo='h2' titulo='Pedido - Cliente 1 - 12-05-2020' />
                </div>
                <div className='flex flex-1 flex-end'>
                    <ButtonSimples
                        type='danger'
                        label='Cancelar Pedido'
                        onClick={() => alert('cancelado')}
                    />
                </div>
            </div>
        )
    }

    renderDadosDoCliente() {
        return (
            <div className='flex-2'>
                <Titulo tipo='h4' titulo='Dados do Cliente' />
                <br />
                <TextoDados chave='Nome' valor='Cliente 1' />
                <TextoDados chave='CPF' valor='111.222.333-45' />
                <TextoDados chave='Telefone' valor='48 98427-0306' />
                <TextoDados chave='Data de Nascimento' valor='11/11/1980' />

            </div>
        )
    }

    renderDadosDeEntrega() {
        return (
            <div className='flex-2'>
                <Titulo tipo='h4' titulo='Dados de Entrega' />
                <br />
                <TextoDados chave='Endereço' valor='Rua Teste, 123' />
                <TextoDados chave='Bairro' valor='Trindade' />
                <TextoDados chave='Cidade' valor='Florianópolis' />
                <TextoDados chave='Estado' valor='Santa Catarina' />
                <TextoDados chave='CEP' valor='88036-050' />

            </div>
        )
    }

    renderDadosDePagamento() {
        return (
            <div className='flex-3'>
                <Titulo tipo='h4' titulo='Dados de Pagamento' />
                <br />
                <TextoDados chave='Taxa de Entrega' valor='R$ 15,50 (PAC)' />
                <TextoDados chave='Valor do Pedido' valor='R$ 32,00' />
                <TextoDados chave='Valor Total' valor='R$ 47,50' />
                <TextoDados chave='Forma de Pagamento' valor='Boleto' />
            </div>
        )
    }
    renderDadosDoCarrinho() {
        const dados = [
            {
                "Produto": "Produto 1",
                "Preço Unit.": "R$ 12,00",
                "Quantidade": "1",
                "Preço Total": "R$ 12,00"
            },
            {
                "Produto": "Produto 2",
                "Preço Unit.": "R$ 10,00",
                "Quantidade": "2",
                "Preço Total": "R$ 20,00"
            }
        ]
        return (
            <div className='flex-3'>
                <Titulo tipo='h4' titulo='Carrinho' />
                <br />
                <TabelaSimples
                    cabecalho={['Produto', 'Preço Unit.', 'Quantidade', 'Preço Total']}
                    dados={dados}
                />
            </div>
        )
    }

    render() {
        return (
            <div className='Detalhes-do-Pedido'>
                {this.renderCabecalho()}
                <div className='flex vertical'>
                    <div className='flex horizontal'>
                        {this.renderDadosDoCliente()}
                        {this.renderDadosDoCarrinho()}
                    </div>
                    <div className='flex horizontal'>
                        {this.renderDadosDeEntrega()}
                        {this.renderDadosDePagamento()}
                    </div>
                </div>
            </div>
        )
    }
}

export default DetalhesDoPedido
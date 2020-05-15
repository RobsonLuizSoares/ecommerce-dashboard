import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import TextoDadosPedidos from '../../components/texto/DadosPedidos'
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
                <TextoDadosPedidos chave='Nome' valor='Cliente 1' />
                <TextoDadosPedidos chave='CPF' valor='111.222.333-45' />
                <TextoDadosPedidos chave='Telefone' valor='48 98427-0306' />
                <TextoDadosPedidos chave='Data de Nascimento' valor='11/11/1980' />

            </div>
        )
    }

    renderDadosDeEntrega() {
        return (
            <div className='flex-2'>
                <Titulo tipo='h4' titulo='Dados de Entrega' />
                <br />
                <TextoDadosPedidos chave='Endereço' valor='Rua Teste, 123' />
                <TextoDadosPedidos chave='Bairro' valor='Trindade' />
                <TextoDadosPedidos chave='Cidade' valor='Florianópolis' />
                <TextoDadosPedidos chave='Estado' valor='Santa Catarina' />
                <TextoDadosPedidos chave='CEP' valor='88036-050' />

            </div>
        )
    }

    renderDadosDePagamento() {
        return (
            <div className='flex-3'>
                <Titulo tipo='h4' titulo='Dados de Pagamento' />
                <br />
                <TextoDadosPedidos chave='Taxa de Entrega' valor='R$ 15,50 (PAC)' />
                <TextoDadosPedidos chave='Valor do Pedido' valor='R$ 32,00' />
                <TextoDadosPedidos chave='Valor Total' valor='R$ 47,50' />
                <TextoDadosPedidos chave='Forma de Pagamento' valor='Boleto' />
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
import React, { Component } from 'react'
import moment from 'moment'

import Titulo from '../../components/texto/Titulo'
import Tabela from '../../components/tabela/TabelaSimples'
import Voltar from '../../components/links/Voltar'

class Avaliacoes extends Component {

    render() {
        const dados = [
            {
                "Cliente": "Cliente 1",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDeDetalhes": "/avaliacao/KFDLSFNR465DF"
            },
            {
                "Cliente": "Cliente 2",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDeDetalhes": "/avaliacao/KFDLSFNR46DF"
            },
            {
                "Cliente": "Cliente 3",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDeDetalhes": "/avaliacao/KFDLSFN465DF"
            },
            {
                "Cliente": "Cliente 4",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDeDetalhes": "/avaliacao/KDLSFNR465DF"
            },
            {
                "Cliente": "Cliente 5",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDeDetalhes": "/avaliacao/KFLSFNR465DF"
            },
            {
                "Cliente": "Cliente 6",
                "Data": moment().format("DD/MM/YYYY"),
                "botaoDeDetalhes": "/avaliacao/KFDLSFN465DF"
            }
        ]

        return (
            <div className='Avaliacoes full-width'>
                <div className='Card'>
                    <Voltar path='/produto/dsfasdfgr' />
                    <Titulo tipo='h1' titulo='Avaliações - Produto 1' />
                    <br />
                    <Tabela
                        cabecalho={['Cliente', 'Data']}
                        dados={dados}
                    />
                </div>
            </div>
        )
    }
}

export default Avaliacoes
import React from 'react'
import { Link } from 'react-router-dom'

const TabelaSimples = ({ cabecalho, dados }) => {
    return (
        <div className='TabelaSimples '>
            <table className='simples full-width'>
                <thead>
                    <tr>
                        {
                            cabecalho.map((item, index) => (
                                <th key={index}>{item}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        dados.map((linha, index) => (
                            <tr key={index}>
                                {
                                    cabecalho.map((item, i) => (
                                        <td key={i}>{linha[item]}</td> || ''
                                    ))
                                }
                                {
                                    linha["botaoDeDetalhes"] && (
                                        <td>
                                            <Link to={linha['botaoDeDetalhes']}>
                                                <button className='button button-info button-small'>
                                                    DETALHES
                                                </button>
                                            </Link>
                                        </td>
                                    )
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TabelaSimples
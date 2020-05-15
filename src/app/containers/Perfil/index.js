import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import ButtonSimples from '../../components/button/Simples'
import TextoDados from '../../components/texto/Dados'
import InputValor from '../../components/inputs/InputValor'
import InputSimples from '../../components/inputs/Simples'


class Perfil extends Component {

    state = {
        nome: 'Usuario Teste',
        email: 'usuario@usuario.com',
        telefone: '48 98427-0306',

        senhaAntiga: '',
        novaSenha: '',
        confirmarNovaSenha: ''
    }


    renderCabecalho() {
        return (
            <div className='flex'>
                <div className='flex-1 flex'>
                    <Titulo tipo='h1' titulo='Perfil' />
                </div>
                <div className='flex-1 flex flex-end'>
                    <ButtonSimples
                        type='success'
                        label='Salvar'
                        onClick={() => alert('Salvo')}
                    />
                </div>
            </div>
        )
    }


    renderDadosConfiguracao() {
        const { nome, telefone, email } = this.state
        return (
            <div className='dados-configuracao'>
                <TextoDados
                    chave='Nome'
                    valor={(
                        <InputValor
                            value={nome}
                            name='nome' noStyle
                            handleSubmit={(valor) => this.setState({ nome: valor })}
                        />
                    )}
                />
                <TextoDados
                    chave='E-mail'
                    valor={(
                        <InputValor
                            value={email}
                            name='email' noStyle
                            handleSubmit={(valor) => this.setState({ email: valor })}
                        />
                    )}
                />
                <TextoDados
                    chave='Telefone'
                    valor={(
                        <InputValor
                            value={telefone}
                            name='telefone' noStyle
                            handleSubmit={(valor) => this.setState({ telefone: valor })}
                        />
                    )}
                />
            </div>
        )
    }

    renderDadosSenha() {
        const { senhaAntiga, novaSenha, confirmarNovaSenha } = this.state
        return (
            <div className='dados-senha'>
                <InputSimples
                    type='password'
                    name='senha-antiga'
                    label="Senha Antiga:"
                    value={senhaAntiga}
                    onChange={(ev) => this.setState({ senhaAntiga: ev.targe.value })}
                />
                <InputSimples
                    type='password'
                    name='nova-senha'
                    label="Nova Senha:"
                    value={novaSenha}
                    onChange={(ev) => this.setState({ novaSenha: ev.targe.value })}
                />
                <InputSimples
                    type='password'
                    name='confirmar-nova-senha'
                    label="Confirmar Nova Senha: "
                    value={confirmarNovaSenha}
                    onChange={(ev) => this.setState({ confirmarNovaSenha: ev.targe.value })}
                />
            </div>

        )
    }

    render() {
        return (
            <div className='Perfil full-width'>
                <div className='Card'>
                    {this.renderCabecalho()}
                    <div className='flex horizontal'>
                        <div className='flex-1'>
                            {this.renderDadosConfiguracao()}
                        </div>
                        <div className='flex-1'>
                            {this.renderDadosSenha()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Perfil
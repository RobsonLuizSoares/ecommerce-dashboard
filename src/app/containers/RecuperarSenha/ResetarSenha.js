import React, { Component } from 'react'

import Titulo from '../../components/texto/Titulo'
import Input from '../../components/inputs/Simples'
import Button from '../../components/button/Simples'


class ResetarSenha extends Component {

    state = {
        senha: '',
        confirmarSenha: ''
    }
    onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value })

    render() {
        const { senha, confirmarSenha } = this.state
        return (
            <div className='Resetar-Senha flex flex-center'>
                <div className='Card '>
                    <div className='flex flex-center'>
                        <Titulo tipo='h1' titulo='Loja Net Link' />
                    </div>
                    <br />
                    <div>
                        <p> Para reiniciar a senha, digite a nova senha abaixo e confirme. </p>
                    </div>
                    <br />
                    <div>
                        <Input
                            label='Senha'
                            type='password'
                            value={senha}
                            onChange={(ev) => this.onChangeInput('senha', ev)}
                        />
                        <Input
                            label='Confirmar Senha'
                            type='password'
                            value={confirmarSenha}
                            onChange={(ev) => this.onChangeInput('confirmarSenha', ev)}
                        />
                    </div>
                    <br />
                    <div className='flex flex-center'>
                        <Button type='success' rota='/login' label='RESETAR SENHA' />
                    </div>
                </div>
            </div>
        )
    }
}

export default ResetarSenha
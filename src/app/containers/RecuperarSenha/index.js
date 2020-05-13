import React, { Component } from 'react'

import Titulo from '../../components/texto/Titulo'
import Input from '../../components/inputs/Simples'
import Button from '../../components/button/Simples'

class RecuperarSenha extends Component {

    state = {
        email: ''
    }
    onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value })
    render() {
        const { email } = this.state
        return (
            <div className='Recuperar-Senha flex flex-center'>
                <div className='Card'>
                    <div className='flex flex-center'>
                        <Titulo tipo='h1' titulo='Loja Net Link' />
                    </div>
                    <br />
                    <div>
                        <p>
                            Para reiniciar sua senha, digite seu email abaixo.
                        </p>
                        <p>
                            Itemos enviar um link para você acessar e entrar com uma nova senha.
                        </p>
                    </div>
                    <br />
                    <div>
                        <Input
                            label='E-mail'
                            value={email}
                            onChange={(ev) => this.onChangeInput('email', ev)}
                            type='email'
                        />
                    </div>
                    <br />
                    <div className='flex flex-center'>
                        <Button type='success' rota='/resetar-senha/1' label='RESETAR SENHA' />
                    </div>
                </div>
            </div>
        )
    }
}

export default RecuperarSenha
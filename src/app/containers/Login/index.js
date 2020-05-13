import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Titulo from '../../components/texto/Titulo'
import Input from '../../components/inputs/Simples'
import Checkbox from '../../components/inputs/Checkbox'

import Button from '../../components/button/Simples'

class Login extends Component {

    state = {
        email: '',
        senha: '',
        opcaoLembrar: true
    }

    onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value })
    onChangeCheckbox = (field) => this.setState({ [field]: !this.state[field] })

    render() {
        const { email, senha, opcaoLembrar } = this.state
        return (
            <div className='Login flex flex-center'>
                <div className='Card'>
                    <div className='flex vertical flex-center'>
                        <Titulo tipo='h1' titulo='Loja Net Link' />
                        <p>Faça seu login abaixo</p>
                    </div>
                    <br />
                    <Input
                        label='E-mail'
                        value={email}
                        type='email'
                        onChange={(ev) => this.onChangeInput('email', ev)}
                    />
                    <Input
                        label='Senha'
                        value={senha}
                        type='senha'
                        onChange={(ev) => this.onChangeInput('senha', ev)}
                    />
                    <div className='flex'>
                        <div className='flex flex-1'>
                            <Checkbox
                                value={opcaoLembrar}
                                onChange={() => this.onChangeCheckbox('opcaoLembrar')}
                                label='Lembrar?'
                            />
                        </div>
                        <div className='flex flex-1 flex-end'>
                            <Link to='/recuperar-senha'><small>Esqueceu sua senha?</small></Link>
                        </div>

                    </div>
                    <br />
                    <div className='flex flex-center'>
                        <Button
                            type='success'
                            rota='/'
                            label='ENTRAR'
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default Login
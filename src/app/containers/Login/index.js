import React, { Component } from 'react'
import Titulo from '../../components/texto/Titulo'
import Input from '../../components/inputs/Simples'
import Checkbox from '../../components/inputs/Checkbox'

import Button from '../../components/button/Simples'

import { connect } from 'react-redux'
import * as actions from '../../actions'
import { api, versao } from '../../config'

class Login extends Component {

    state = {
        email: '',
        senha: '',
        opcaoLembrar: true,
        erros: {}
    }

    onChangeInput = (field, ev) => {
        this.setState({ [field]: ev.target.value })
        this.validate()
    }
    onChangeCheckbox = (field) => this.setState({ [field]: !this.state[field] })

    handleLogin() {
        const { email, senha: password, opcaoLembrar } = this.state
        if (!this.validate()) return

        this.props.handleLogin({ email, password, opcaoLembrar }, () => {
            alert('avisoLogin')
        })
    }

    validate() {
        const { email, senha } = this.state
        const erros = {}

        if (!email) erros.email = 'Preencha aqui com seu email'
        if (!senha) erros.senha = 'Preencha aqui com sua senha'

        this.setState({ erros })
        console.log(erros)
        return !(Object.keys(erros).length > 0)
    }

    render() {
        const { email, senha, opcaoLembrar, erros } = this.state
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
                        error={erros.email}
                        onChange={(ev) => this.onChangeInput('email', ev)}
                    />
                    <Input
                        label='Senha'
                        value={senha}
                        type='senha'
                        error={erros.senha}
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
                            {/* <Link to='/recuperar-senha'><small>Esqueceu sua senha?</small></Link> */}
                            <a href={`${api}/${versao}/api/usuarios/recuperar-senha`}><small> Esqueceu sua senha?</small></a>
                        </div>

                    </div>
                    <br />
                    <div className='flex flex-center'>
                        <Button
                            type='success'
                            onClick={() => this.handleLogin()}
                            label='ENTRAR'
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(null, actions)(Login)
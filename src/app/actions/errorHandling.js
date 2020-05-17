const errorHandling = (error) => {
    if (!error.response || !error.response.data) {
        return {
            status: 500, message: 'Ocorreu um erro no servidor. Tente novamente'
        }
    }
    if (error.response.data.status === 401) {
        return { status: 401, message: 'Não autorizado a acessar esses dados' }
    }
    const _errors = error.response.data.errors
    if (_errors && typeof _errors === 'string') return { status: 400, message: _errors }

    let msg = `Preencha corretamente ${_errors.length > 1 ? "os campos" : "o campo de"}`

    _errors.forEach((item, idx) => {
        const field = item.field[item.field.length - 1]
        msg += ` ${field}${(_errors.length === idx + 1) ? '.' : ','}`
    })
    return { status: 400, message: msg }
}

export default errorHandling
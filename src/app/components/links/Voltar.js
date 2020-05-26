import React from 'react'
import { Link } from 'react-router-dom'

const Voltar = ({ path, history }) => {

    if (path) return (<Link className='fas fa-arrow-left Link-Voltar' to={path}> {"VOLTAR"} </Link>)
    else return (<span className='Link-Voltar' onClick={() => history.goBack()}>{"VOLTAR"}</span>)
}


export default Voltar 
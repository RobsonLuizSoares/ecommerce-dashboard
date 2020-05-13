import React from 'react'
import { Link } from 'react-router-dom'

const Voltar = ({ path }) => (
    <Link className='fas fa-arrow-left Link-Voltar' to={path}> {"VOLTAR"} </Link>
)

export default Voltar 
import React from 'react'
import { Link } from 'react-router-dom'

const BarraTopo = () => {
    return (
        <div className='Barra-Topo flex horizontal full-width'>
            <div className='flex-1 flex flex-start'>
                <a href='/'>Ver Loja</a>
            </div>
            <div className='flex-1 flex flex-end'>
                <Link to='logout'>Logout</Link>
            </div>
        </div>
    )
}
export default BarraTopo
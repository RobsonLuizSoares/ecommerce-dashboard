import React from 'react'

const Pesquisa = ({ valor, onChange, placeholder, onClick }) => {
    return (
        <div className='Pesquisa flex horizontal'>
            <input value={valor} onChange={onChange} placeholder={placeholder} />
            <button>
                <i
                    className='fa fa-search'
                    onClick={onClick}
                />
            </button>
        </div>
    )
}

export default Pesquisa
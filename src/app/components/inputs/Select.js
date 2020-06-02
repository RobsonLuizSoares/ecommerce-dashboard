import React from 'react'


const InputSelect = ({ value, name, opcoes, onChange, error }) => {
    return (
        <div className='Input-Select flex vertical'>
            <select value={value} name={name} onChange={onChange}>
                {
                    opcoes.map((opcao, idx) => (
                        <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
                    ))
                }
            </select>
            <div style={{ marginTop: '8px' }}>
                {error && (<small className='small-danger'>{error}</small>)}
            </div>
        </div>
    )
}

export default InputSelect
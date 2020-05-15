import React from 'react'


const InputSelect = ({ value, name, opcoes, onChange }) => {
    return (
        <div>
            <select value={value} name={name} onChange={onChange}>
                {
                    opcoes.map((opcao, idx) => (
                        <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default InputSelect
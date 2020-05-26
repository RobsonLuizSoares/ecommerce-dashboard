import React from 'react'

const AlertGeral = ({ aviso }) => {
    if (!aviso) return null

    const { status, msg } = aviso

    return (
        <div className={`alert alert-${status ? "success" : "danger"}`}>
            <h6> {msg} </h6>
        </div>
    )
}

export default AlertGeral
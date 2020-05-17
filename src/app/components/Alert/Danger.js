import React from 'react'


const AlertDanger = ({ error }) => {
    if (!error) return null
    return (
        <div className='alert alert-danger'>
            <p>{error.message}</p>
        </div>
    )
}

export default AlertDanger
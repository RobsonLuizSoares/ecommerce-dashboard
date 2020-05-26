import React from 'react'


const AlertDanger = ({ error }) => {
    if (!error) return null
    return (
        <div className='alert alert-danger'>
            <h5>{error.message}</h5>
        </div>
    )
}

export default AlertDanger
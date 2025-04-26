import React from 'react'

function MainButton({text,type})
{
    return (
        <button type={type} className="order-btn">{text}</button>
    )
}

export default MainButton
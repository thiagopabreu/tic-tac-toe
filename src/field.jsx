import { useState, useEffect } from 'react'

const Field = () => {


    const handleClick = () => {
        console.log('Hello')
    }

    return <td className='field' onClick={() => handleClick()}></td>
}

export default Field
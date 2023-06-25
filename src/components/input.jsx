import React from 'react'

const Input = (props) => {
    return (
        <div className=''>
            <p className=''>{props.label}</p>
            <input className={`${props.style} border p-0.5 rounded-md m-1 gap-2 focus:ring-0 w-full `} type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.onChange} />
        </div>
    )
}

export default Input
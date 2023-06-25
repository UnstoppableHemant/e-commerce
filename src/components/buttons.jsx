import React from 'react'

const Button = (props) => {
  return (
    <button className={props.btnStyle} onClick={props.handleClick}>{props.btnName}</button>
  )
}

export default Button
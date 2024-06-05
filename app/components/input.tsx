"use client"
import React from 'react'

interface PropTypes {
    label: string;
    value: string;
    placeholder: string;
    className: string;
}
const input = (props:PropTypes) => {
  const label = props.label || ""
  const placeholder = props.placeholder || ""
  const classname = props.className || ""

  return (
    <div className = "flex w-full">
        {label.length>0 && <label className="m-1">{label}</label>}
        <input className={`m-1 border rounded-md p-3 w-full ${classname}`} placeholder={placeholder}></input>
    </div>
  )
}

export default input
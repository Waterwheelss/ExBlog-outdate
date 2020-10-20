import React from 'react'
import styled from 'styled-components'

export const TextInput = ({className = '', name, onChange, value, label, type}) => {
    return (
        <div className={`form__inputField ${className}`}>
            <input className={`form__input ${value ? 'hasValue' : ''}`} type={type} name={name} value={value} onChange={(e) => onChange(e)}></input>
            <label className="form__label" htmlFor="email">{label}</label>
            <span className="form__inputLine" />
        </div>
    )
}
import React from 'react'
import styled, { withTheme } from 'styled-components'

const InputField = styled.div`
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
`

const Input = styled.input`
    width: 300px;
    height: 30px;
    border: none; //clear border style
    background-color: transparent;
    border-bottom: solid 2px ${props => props.theme.dark};
    color: ${props => props.theme.white};
    position: relative;
    z-index: 2;

    &:focus, &.hasValue{
        outline: none;
    }
`

const Label = styled.label`
    display: block;
    font-family: Roboto, "san-serif";
    letter-spacing: 0.05em;
    font-weight: 100;
    position: absolute;
    top: 5px;
    z-index: 1;
    transition: 0.2s;

    ${Input}:focus + &, 
    ${Input}.hasValue + &{
        font-size: 1.3rem;
        transform: translateY(-20px);
        transition: 0.2s;
    }
`

const Line = styled.span`
    display: block;
    position: absolute;
    width: 0px;
    border-bottom: solid 2px ${props => props.theme.primary};
    transition: width 0.3s ease;
    bottom: 1px;
    z-index: 3;

    ${Input}:focus + ${Label} + &,
    ${Input}.hasValue + ${Label} + &{
        width: 100%;
        transition: width 0.3s ease;
    }
`

const TextInput = (props) => {
    const {
        className = '',
        name,
        onChange,
        value,
        label,
        type
    } = props

    return (
        <InputField className={`${className}`}>
            <Input className={`${value ? 'hasValue' : ''}`} type={type} name={name} value={value} onChange={(e) => onChange(e)}></Input>
            <Label htmlFor="email">{label}</Label>
            <Line />
        </InputField>
    )
}

export default withTheme(TextInput)
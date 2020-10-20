import React from 'react'
import { withTheme } from 'styled-components'
import styled from 'styled-components'

const ButtonBase = styled.button`
    border: none;
    padding: 10px 20px;
    color: ${props => props.theme.primary};
    background-color: transparent;
    border: solid 2px ${props => props.theme.primary};
    cursor: pointer;
    transition: 0.2s;
    border-radius: 10px;

    &:hover{
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.dark};
        transition: 0.2s;
    }
`

const Button = (props) => {

    const {
        children,
        className,
        onClick,
    } = props

    return (
        <ButtonBase 
            className={className} 
            onClick={onClick}
        >
            {children}
        </ButtonBase>
    )
}

export default withTheme(Button)
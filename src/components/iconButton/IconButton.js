import React from 'react'
import { withTheme } from 'styled-components'
import styled from 'styled-components'

const IconButtonBase = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 999px;
    height: 40px;
    width: 40px;

    &:hover{
        color: ${props => props.theme.primary};
        transition: 0.2s;

        svg{
            fill: ${props => props.theme.primary};
            transition: 0.2s;
        }
    }

    &.active{
        background-color: ${props => props.theme.primary};
        color: ${props => props.theme.dark};
        transition: 0.2s;

        svg{
            fill: ${props => props.theme.dark};
            transition: 0.2s;
        }
    }

    svg{
        width: 30px;
        height: 30px;
        fill: ${props => props.theme.white};
    }
`

const IconButton = (props) => {

    const {
        children,
        className,
        onClick,
        active,
    } = props

    return (
        <IconButtonBase
            className={`${active ? 'active' : ''} ${className}`}
            onClick={onClick}
        >
            {children}
        </IconButtonBase>
    )
}

export default withTheme(IconButton)
import React from 'react'
import styled, { withTheme } from 'styled-components'

const CardBase = styled.div`
    background-color: ${props => props.theme.lightDark};
    padding: 30px;
    border-radius: 20px;
    box-shadow: 3px 3px 10px ${props => props.theme.black};
`

const Card = (props) => {
    const {
        className,
        children
    } = props

    return(
        <CardBase className={className}>
            {children}
        </CardBase>
    )
}

export default withTheme(Card);
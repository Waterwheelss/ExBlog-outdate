import styled, { css } from 'styled-components'
import { typography, space } from 'styled-system'

const Link = styled.a`
    ${typography}
    ${space}

    ${props => props.variant === 'underscored' && css`
        display: inline-block;
        color: ${props => props.theme.primary};
        position: relative;

        &::after {
            content: "";
            display: block;
            position: absolute;
            width: 0px;
            height: 0px;
            border-top: solid 1px ${props => props.theme.primary};
            transition: width 0.5s ease;
            overflow: hidden;
            margin-top: 5px;
        }

        &:hover::after {
            width: 100%;
            transition: width 0.5s ease;
        }
    `}
`

export default Link
import React from 'react'
import styled from 'styled-components'
import { space, layout } from 'styled-system'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

const AlertBase = styled.div`
    ${space}
    ${layout}
    padding: 20px;
    background-color: ${props => props.type ? props.theme[props.type] : props.theme.success};
    border-radius: 5px;
    display: flex;
`

const AlertMessage = styled.div`
    font-size: 1.6rem;
    font-weight: 400;
    padding: 3px 0;
`

const AlertIcon = styled.div`
    margin-right: 8px;

    & svg{
        width: 25px;
        height: 25px;
    }
`

const Alert = (props) => {
    const {
        children,
        className,
        type
    } = props

    return (
        <AlertBase
            className={className}
            type={type}
        >
            <AlertIcon>
                {type === 'success' &&
                    <CheckCircleOutlineIcon />
                }
                {type === 'danger' &&
                    <ErrorOutlineOutlinedIcon />
                }
            </AlertIcon>
            <AlertMessage>
                {children}
            </AlertMessage>
        </AlertBase>
    )
}

export default Alert
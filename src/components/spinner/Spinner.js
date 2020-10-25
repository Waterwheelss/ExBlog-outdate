import React from 'react'
import styled from 'styled-components'


const SpinnerBase = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${props => props.width ? props.width : '30px'};
    height: ${props => props.height ? props.height : '30px'};

    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: ${props => props.width ? props.width : '30px'};
        height: ${props => props.height ? props.height : '30px'};
        margin: 8px;
        border: 3px solid ${props => props.theme.primary};
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${props => props.theme.primary} transparent transparent transparent;
    }
    & div:nth-child(1) {
        animation-delay: -0.45s;
    }
    & div:nth-child(2) {
        animation-delay: -0.3s;
    }
    & div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }
`

const Spinner = (props) => {
    const {
        width,
        height
    } = props
    return (
        <SpinnerBase width={width} height={height}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </SpinnerBase>
    )
}

export default Spinner
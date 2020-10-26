import React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group';

const transitionStyles = {
    entering: { transform: 'translateX(400px)' },
    entered: { transform: 'translateX(0px)' },
    exiting: { transform: 'translateX(400px)' },
    exited: { transform: 'translateX(400px)' },
};

const covervTransitionStyles = {
    entering: {
        opacity: '0'
    },
    entered: {
        opacity: '0.5'
    },
    exiting: {
        opacity: '0',
    },
    exited: {
        opacity: '0',
    },
}

const DrawerBase = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    background-color: ${props => props.theme.lightDark};
    z-index: 2;
    transition: 0.2s;
`

const Cover = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #111;
    transition: 0.2s;
`

const Drawer = ({ open = false, children }) => {
    return (
        <Transition
            in={open}
            timeout={{
                enter: 0,
                exit: 200,
            }}
            unmountOnExit={true}
        >
            {state => (
                <React.Fragment>
                    <DrawerBase style={{ ...transitionStyles[state] }}>
                        {children}
                    </DrawerBase>
                    <Cover style={{ ...covervTransitionStyles[state] }}>

                    </Cover>
                </React.Fragment>
            )
            }
        </Transition>
    )
}

export default Drawer
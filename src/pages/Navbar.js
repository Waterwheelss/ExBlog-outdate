import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import Box from '../components/box'
import styled from 'styled-components'

const NavBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.lightDark};
    box-shadow: 1px 1px 5px ${props => props.theme.black};
    position: fixed;
    top: 0;
`

const Navbar = () => {
    return (
        <NavBox>
            <Box>
                <Box ml="4rem">
                    <Icon />
                </Box>
            </Box>
            <Box>
                <Box mr="5rem">
                    <Box display="inline-block" mr="10px" ml="10px">
                        <Link to="/login">
                            Login
                        </Link>
                    </Box>
                    <Box display="inline-block" mr="10px" ml="10px">
                        <a>
                            Sign Up
                        </a>
                    </Box>
                </Box>
            </Box>
        </NavBox>
    )
}

export default Navbar
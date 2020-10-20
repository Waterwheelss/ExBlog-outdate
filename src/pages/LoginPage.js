import React from 'react'
import { UserLoginForm } from '../features/user/UserLoginForm'
import Box from '../components/box'
import Flex from '../components/flex'

const LoginPage = () => {
    return(
        <Flex 
            className=""
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            height="calc(100vh - 70px)"
        >
            <UserLoginForm />
        </Flex>
    )
}

export default LoginPage
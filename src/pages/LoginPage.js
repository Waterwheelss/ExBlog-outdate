import React from 'react'
import { UserLoginForm } from '../features/user/UserLoginForm'
import Flex from '../components/flex'

const LoginPage = () => {
    return(
        <Flex 
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100vw"
            height="100vh"
            mt="70px"
        >
            <UserLoginForm />
        </Flex>
    )
}

export default LoginPage
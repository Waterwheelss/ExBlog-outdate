import React from 'react'
import { UserLoginForm } from '../features/user/UserLoginForm'
import Flex from '../components/flex'
import { selectUser } from '../features/user/userSlice'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar'

const LoginPage = () => {
    const user = useSelector(selectUser)
    return (
        <React.Fragment>
            <Navbar />
            <Flex
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100vw"
                height="100vh"
                mt="70px"
            >
                <UserLoginForm />

                {/* If user is logged in, redirect to home page */}
                {user.isAuthenticated &&
                    <Redirect to="/" />
                }
            </Flex>
        </React.Fragment>
    )
}

export default LoginPage
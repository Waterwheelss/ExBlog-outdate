import React, { useState } from 'react'
import { Icon } from '../../components/Icon'
import TextInput from '../../components/textInput'
import Button from '../../components/button';
import Card from '../../components/card'
import Box from '../../components/box'
import Alert from '../../components/alert';
import Spinner from '../../components/spinner'
import { useDispatch } from 'react-redux'
import { userLogin } from './userSlice'
import { unwrapResult } from '@reduxjs/toolkit';
import { Redirect } from 'react-router-dom'

export const UserLoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [requestStatus, setRequestStatus] = useState('idle')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        try {
            setRequestStatus('pending')
            const resultAction = await dispatch(
                userLogin(data)
            )
            unwrapResult(resultAction)
            setEmail('')
            setPassword('')
            setRequestStatus('success')
        } catch (error) {
            setMessage('帳號密碼錯誤')
            setRequestStatus('error')
        }
    }

    return (
        <Card>
            <Box mt="10px" mb="30px">
                <Box
                    textAlign="center"
                >
                    <Icon width="100px" height="100px" className="form__logo" />
                </Box>
            </Box>
            {requestStatus === 'pending' &&
                <Box textAlign="center">
                    <Spinner />
                </Box>
            }
            {requestStatus === 'error' &&
                <Box>
                    <Alert type="danger">
                        {message}
                    </Alert>
                </Box>
            }
            <Box>
                <form action="" className="form" onSubmit={(e) => onSubmit(e)}>
                    <TextInput
                        name='email'
                        label="Email"
                        type="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                        name='password'
                        label="Password"
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Box textAlign="center">
                        <Button>
                            登入
                        </Button>
                    </Box>
                </form>
            </Box>
        </Card >
    )
}
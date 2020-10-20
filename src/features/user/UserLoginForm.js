import React, { useState } from 'react'
import { Icon } from '../../components/Icon'
import TextInput from '../../components/textInput'
import Button from '../../components/button';
import Card from '../../components/card'
import Box from '../../components/box'


export const UserLoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        }
        console.log(data)
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
            <Box>
                <form action="" className="form" onSubmit={(e) => onSubmit(e)}>
                    <TextInput
                        name='email'
                        label="Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                        name='password'
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Box textAlign="center">
                        <Button>
                            登入
                        </Button>
                    </Box>
                </form>
            </Box>
        </Card>
    )
}
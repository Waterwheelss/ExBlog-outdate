import React, { useState } from 'react'
import { Icon } from '../../components/Icon'
import { TextInput } from '../../components/Input'
import Button from '@material-ui/core/Button';

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
        <div className="form form--card">
            <div className="form__logo-container">
                <Icon className="form__logo" />
            </div>
            <div className="form__form-container">
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
                </form>
            </div>
        </div>
    )
}
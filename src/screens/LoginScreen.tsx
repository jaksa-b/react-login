import React, { useState } from 'react'

import { login } from '../../api'
import { Button, Container, Form, FormItem, Input, Message, Title } from '../components'
import { useAuth, useForm } from '../hooks'

type FormValues = {
  username: string
  password: string
}

export const LoginScreen: React.FC = () => {
  const { dispatch } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [values, handleChange] = useForm<FormValues>({
    username: '',
    password: '',
  })

  const { username, password } = values

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const token = (await login(username, password)) || '' || undefined
      setLoading(false)
      if (token) {
        dispatch({
          type: 'LOGIN',
          payload: {
            user: username,
            token,
          },
        })
      } else {
        setError('Invalid credentials')
      }
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }
  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={onSubmit}>
        {error ? <Message type="error">{error}</Message> : null}
        <FormItem label="Username">
          <Input name="username" placeholder="Username" value={username} onChange={handleChange} />
        </FormItem>
        <FormItem label="Password">
          <Input name="password" type="password" placeholder="Password" value={password} onChange={handleChange} />
        </FormItem>
        <Button disabled={loading}>{loading ? 'Sending...' : 'Login'}</Button>
      </Form>
    </Container>
  )
}

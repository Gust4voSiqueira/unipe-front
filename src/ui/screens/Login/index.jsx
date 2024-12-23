import './styles.css'
import { z } from 'zod'
import { useState } from 'react'
import { Alert } from '@mui/material'

import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Logo from '../../../assets/logo.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonComponent } from '../../components'
import { useUser } from '../../../hooks/useUser'
import { isErrorInput } from '../../../utils/isErrorInput'

function HandleError({ isError }) {
  return (
    isError && (
      <div className="error-container">
        <Alert variant="filled" severity="error">
          E-mail e/ou senha incorretos.
        </Alert>
      </div>
    )
  )
}

const createUserFormSchema = z.object({
  email: z.string().min(13).email(),
  password: z.string().min(7),
})

export function Login() {
  const { login } = useUser()
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  })

  async function handleLogin(user) {
    try {
      setIsLoading(true)
      setIsError(false)
      await login(user)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setIsError(true)
    }
  }

  return (
    <div className="login-container">
      <HandleError isError={isError} />

      <img src={Logo} alt="Logo da aplicação" />

      <form
        onSubmit={handleSubmit(handleLogin)}
        className="form-login-container"
      >
        <span>E-mail</span>
        <input
          type="text"
          autoComplete="off"
          {...register('email')}
          className={isErrorInput(errors, 'email')}
        />

        <span>Senha</span>
        <input
          type="password"
          {...register('password')}
          className={isErrorInput(errors, 'password')}
        />

        <span className="span-message">
          Novo por aqui?{' '}
          <Link to="/register" className="link-register">
            Cadastre-se
          </Link>
        </span>

        <ButtonComponent text="Entrar" isLoading={isLoading} />
      </form>
    </div>
  )
}

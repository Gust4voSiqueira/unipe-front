import './styles.css'
import { z } from 'zod'
import { useState } from 'react'

import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import Logo from '../../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonComponent } from '../../components'
import { useUser } from '../../../hooks/useUser'
import { Alert } from '@mui/material'

function HandleError({ isError }) {
  return (
    isError && (
      <div className="error-container">
        <Alert variant="filled" severity="error">
          Parece que este e-mail já está cadastrado.
        </Alert>
      </div>
    )
  )
}

const createUserFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().min(13).email(),
  course: z.string().min(3),
  password: z.string().min(7),
  confirmPassword: z.string().min(7),
  phone: z
    .string()
    .regex(
      /^\+55 \d{2} \d{5}-\d{4}$/,
      'O telefone deve estar no formato +55 XX XXXXX-XXXX.',
    ),
})

export function Register() {
  const navigate = useNavigate()
  const { login, registerUser } = useUser()

  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  })

  function isErrorInput(input) {
    return Object.keys(errors).some((value) => value === input)
      ? 'input-error'
      : 'input-normal'
  }

  async function handleRegisterUser(user) {
    try {
      setIsLoading(true)
      setIsError(false)

      await registerUser(user)
      await login(user)
      navigate('/')
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  return (
    <div className="register-container">
      <HandleError isError={isError} />
      <img src={Logo} alt="Logo da aplicação" />

      <form
        onSubmit={handleSubmit(handleRegisterUser)}
        className="form-register-container"
      >
        <span>E-mail</span>
        <input
          type="text"
          {...register('email')}
          className={isErrorInput('email')}
        />

        <span>Nome</span>
        <input
          type="text"
          {...register('name')}
          className={isErrorInput('name')}
        />

        <span>Telefone</span>
        <InputMask mask="+55 99 99999-9999" {...register('phone')}>
          {() => (
            <input
              type="text"
              {...register('phone')}
              className={isErrorInput('phone')}
            />
          )}
        </InputMask>

        <span>Curso</span>
        <input
          type="text"
          {...register('course')}
          className={isErrorInput('course')}
        />

        <span>Senha</span>
        <input
          type="password"
          {...register('password')}
          className={isErrorInput('password')}
        />

        <span>Confirmar senha</span>
        <input
          type="password"
          {...register('confirmPassword')}
          className={isErrorInput('confirmPassword')}
        />

        <span className="span-message">
          Já possui cadastro?{' '}
          <Link to="/" className="link-register">
            Entrar
          </Link>
        </span>

        <ButtonComponent text="Cadastrar e acessar" isLoading={isLoading} />
      </form>
    </div>
  )
}

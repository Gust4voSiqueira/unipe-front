import './styles.css'
import { z } from "zod"
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../assets/logo.png'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonComponent } from '../../components/Button'
import { useUser } from '../../../hooks/useUser'
import { useState } from 'react'
import { Alert } from '@mui/material'

function HandleError({ isError }) {
    return isError && (
        <div className='error-container'>
                <Alert variant="filled" severity="error">
                    Parece que este e-mail já está cadastrado.
                </Alert>
            </div>
    )
}

const createUserFormSchema = z.object({
    name: z.string().min(3),
    email: z.string().min(13).email(),
    course: z.string().min(3),
    password: z.string().min(7),
    confirmPassword: z.string().min(7),
})

export function Register() {
    const { registerUser } = useUser()
    const navigate = useNavigate()
    const [isError, setIsError] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createUserFormSchema)
    })

    function isErrorInput(input) {
        return Object.keys(errors).some(value => value === input) ? 'input-error' : 'input-normal'
    }

    async function handleRegisterUser(user) {
        try {
            setIsError(false)
            await registerUser(user);
            navigate("/")
        } catch (error) {
            setIsError(true)
        }
    }

    return (
        <div className='register-container'>
            <HandleError isError={isError} />
            <img src={Logo} alt="Logo da aplicação" />

            <form onSubmit={handleSubmit(handleRegisterUser)} className='form-register-container'>
                <span>E-mail</span>
                <input type="text" {...register("email")} className={isErrorInput('email')} />

                <span>Nome</span>
                <input type="text"  {...register("name")} className={isErrorInput('name')} />

                <span>Curso</span>
                <input type="text"  {...register("course")} className={isErrorInput('course')} />

                <span>Senha</span>
                <input type="password"  {...register("password")} className={isErrorInput('password')} />

                <span>Confirmar senha</span>
                <input type="password"  {...register("confirmPassword")} className={isErrorInput('confirmPassword')} />

                <span className='span-message'>Já possui cadastro? <Link to="/login" className='link-register'>Entrar</Link></span>

                <ButtonComponent text="Cadastrar" />
            </form>
        </div>
    )
}
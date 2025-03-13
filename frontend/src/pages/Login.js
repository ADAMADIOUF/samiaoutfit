import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'
import Loader from '../components/Loading'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, { isLoading }] = useLoginMutation()

  const { userInfo } = useSelector((state) => state.auth)
  const { search } = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [userInfo, redirect, navigate])

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate(redirect)
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }

  return (
    <div className='login-screen section-center'>
      <h1>Se connecter</h1>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='email'>Adresse e-mail</label>
          <input
            type='email'
            id='email'
            placeholder="Entrez l'email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Mot de passe</label>
          <input
            type='password'
            id='password'
            placeholder='Entrez le mot de passe'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='submit-button' disabled={isLoading}>
          Se connecter
        </button>
        {isLoading && <Loader />}
      </form>

      <div className='links'>
        <Link to='/forgot-password'>Mot de passe oublié ?</Link>
        <div className='register-link'>
          Nouveau client ?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Créer un compte
          </Link>
        </div>
      </div>
      <div className='return-to-store'>
        <Link to='/'>Retour à la boutique</Link>
      </div>
    </div>
  )
}

export default Login

import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useRegisterMutation, useLogoutMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'
import Loader from '../components/Loading'

const Register = () => {
  const [name, setName] = useState('') // Added state for name
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [register, { isLoading }] = useRegisterMutation()
  const [logoutApiCall] = useLogoutMutation()
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
    if (password !== confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas')
      return
    }
    try {
      const res = await register({ name, email, password }).unwrap() // Pass name to the API
      dispatch(setCredentials({ ...res }))
      navigate(redirect)
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }

  return (
    <div className='login-screen section-center'>
      <h1>Créer un compte</h1>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
          <label htmlFor='name'>Nom</label>
          <input
            type='text'
            id='name'
            placeholder='Entrez votre nom'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Adresse e-mail</label>
          <input
            type='email'
            id='email'
            placeholder='Entrez votre e-mail'
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
            placeholder='Entrez un mot de passe'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirmer le mot de passe</label>
          <input
            type='password'
            id='confirmPassword'
            placeholder='Confirmez le mot de passe'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='submit-button' disabled={isLoading}>
          S'inscrire
        </button>
        {isLoading && <Loader />}
      </form>

      <div className='links'>
        <div className='login-link'>
          Vous avez déjà un compte ?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Se connecter
          </Link>
        </div>
      </div>

      <div className='return-to-store'>
        <Link to='/'>Retour à la boutique</Link>
      </div>
    </div>
  )
}

export default Register

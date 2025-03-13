import React, { useEffect, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useProfileMutation } from '../slices/userApiSlice'
import Loader from '../components/Loading'
import { setCredentials } from '../slices/authSlice'
import Message from '../components/Error'

const Profile = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { userInfo } = useSelector((state) => state.auth)
  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation()

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name)
      setEmail(userInfo.email)
    }
  }, [userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      toast.error('Les mots de passe ne correspondent pas')
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap()
        dispatch(setCredentials(res))
        toast.success('Profil mis à jour avec succès')
      } catch (error) {
        toast.error(error?.data?.message || error.error)
      }
    }
  }

  return (
    <div className='login-screen section-center'>
      <div className='profile-form'>
        <h2>Profil utilisateur</h2>
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <label htmlFor='name'>Nom</label>
            <input
              type='text'
              id='name'
              placeholder='Entrez votre nom'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='Entrez votre email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Mot de passe</label>
            <input
              type='password'
              id='password'
              placeholder='Entrez votre mot de passe'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='confirmPassword'>Confirmer le mot de passe</label>
            <input
              type='password'
              id='confirmPassword'
              placeholder='Confirmer le mot de passe'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='submit-button'>
            Mettre à jour
          </button>
          {loadingUpdateProfile && <Loader />}
        </form>
      </div>
    </div>
  )
}

export default Profile

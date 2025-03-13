import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {
  
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_SAMIAOUTFIT, {
    expiresIn: '30d', 
  })

  // Set the cookie with the token
  res.cookie('jwt', token, {
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production', // Set to true only in production
    sameSite: 'strict', // Prevents CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  })
}

export default generateToken

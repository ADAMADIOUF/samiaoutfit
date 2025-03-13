import React, { useEffect, useState } from 'react'
import bigbanner from '../assets/bigbanner.png'

const Banner = () => {
  // Initializing countdown time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Calculate remaining time
  useEffect(() => {
    const countdownDate = new Date('March 20, 2025 00:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      if (distance < 0) {
        clearInterval(interval)
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='banner' style={{ backgroundColor: '#FFFBF4' }}>
      <div className='banner-content'>
        {/* Left side: Image */}
        <div className='banner-image'>
          <img src={bigbanner} alt='Bannière du magasin' />
        </div>

        {/* Right side: Text and Countdown */}
        <div className='banner-details'>
          <div className='banner-text'>
            <h1>Explorez chaque partie de ces produits</h1>
            <button className='buy-now-btn'>Achetez maintenant</button>
          </div>

          <div className='countdown'>
            <div className='countdown-item'>
              <p>{timeLeft.days}</p>
              <span>Jours</span>
            </div>
            <div className='countdown-item'>
              <p>{timeLeft.hours}</p>
              <span>Heures</span>
            </div>
            <div className='countdown-item'>
              <p>{timeLeft.minutes}</p>
              <span>Minutes</span>
            </div>
            <div className='countdown-item'>
              <p>{timeLeft.seconds}</p>
              <span>Secondes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

import React from 'react'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'

const TopBanner = () => {
  return (
    <div className='TopBanner'>
      <div className='top-banner-container'>
        <div className='banner-item'>
          <h3>-30%</h3>
          <p>Vêtements tendance pour filles</p>
          <img src={banner1} alt='banner1' />
        </div>
        <div className='banner-item'>
          <h3>Nouvelle collection</h3>
          <p>Styles modernes pour toutes les saisons</p>
          <img src={banner2} alt='banner2' />
        </div>
        <div className='banner-item'>
          <h3>Offres exclusives</h3>
          <p>Découvrez la mode dernière tendance pour filles</p>
          <img src={banner3} alt='banner3' />
        </div>
      </div>
    </div>
  )
}

export default TopBanner

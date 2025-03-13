import React from 'react'
import Slider from './Slider'
import TopBanner from './TopBanner'
import FeaturedProducts from '../pages/FeaturedProducts'
import Banner from './Banner'
import FilterProducts from '../pages/FilterProducts'
import LastProduct from '../pages/LastProducts'

const Home = () => {
  return (
    <div>
      <Slider />
      <TopBanner />
      <FeaturedProducts />
      <Banner />
      <FilterProducts />
      <LastProduct />
    </div>
  )
}

export default Home

import React from 'react';
import { useSelector } from 'react-redux';
import HeaderNav from '../../../components/HeaderNav';
import Swiper from '../../../components/Swiper';
import HomeHotList from './HomeHotList';


import Banner1 from '../../../assets/images/banner1.png'
import Banner2 from '../../../assets/images/banner2.png'
import Banner3 from '../../../assets/images/banner3.png'


function Home (props) {
  const city = useSelector(state => state.city)
  // console.log("🚀 ~ file: index.jsx ~ line 15 ~ Home ~ city", city)

  return (
    <div>
      <HeaderNav cityName={city.cityName} />
      <Swiper banners={[Banner1, Banner2, Banner3]} />
      <HomeHotList cityName={city.cityName} />
    </div>
  )
}

export default Home

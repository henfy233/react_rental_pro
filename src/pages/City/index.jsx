import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { initCity, changeCity } from '../../redux/actions/city'

import CityHeader from '../../components/PubHeader';
import CurrentCity from './CurrentCity';
import CityList from './CityList';
import CityLists from './CityLists';


function City (props) {

  // const [city, setCity] = useState("北京")
  const dispatch = useDispatch();
  const city = useSelector(state => state.city)
  // console.log("🚀 ~ file: index.jsx ~ line 13 ~ City ~ city", city)

  function onCityEvent (city) {
    // console.log("🚀 ~ file: index.jsx ~ line 16 ~ onCityEvent ~ city", city)
    // setCity(city)
    dispatch(changeCity(city))
    window.history.back()
  }

  return (
    <div>
      <CityHeader title={'城市选择'} />
      <CurrentCity title={'当前城市'} city={city.cityName} />
      <CityList onEvent={onCityEvent} />
      <CityLists onEvent={onCityEvent} />
    </div>
  )
}

export default City

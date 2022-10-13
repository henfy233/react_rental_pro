import React from 'react';
import { useNavigate } from 'react-router-dom'

import './index.less'

function CityList (props) {
  const navigate = useNavigate()
  const citys = ['北京', '上海', '广州', '深圳', '西安']


  function handleClickCity (city) {
    props.onEvent(city.item)
    navigate("/");
  }

  return (
    <div className='city-list'>
      <h3>热门城市</h3>
      <ul className='clear-fix'>
        {
          citys.map((item, index) => {
            return (
              <li key={index} onClick={() => handleClickCity({ item })}>
                <span>{item}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default CityList

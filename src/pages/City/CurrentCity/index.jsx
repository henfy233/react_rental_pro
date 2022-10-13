import React from 'react';

import './index.less'

function CurrentCity (props) {
  return (
    <div className='current-city'>
      <h2>{props.title} {props.city}</h2>
    </div>
  )
}

export default CurrentCity

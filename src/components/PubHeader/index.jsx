import React from 'react';
import { createHashHistory } from 'history'


import './index.less'

function PubHeader (props) {
  const history = createHashHistory({ window })
  const backToHome = () => {
    history.go(-1)
    // window.history.back()
  }
  return (
    <div className='commonHeader'>
      <span className="choose-icon" onClick={backToHome}>
        <i className="icon-chevron-left"></i>
      </span>
      <h1>{props.title}</h1>
    </div>
  )
}

export default PubHeader

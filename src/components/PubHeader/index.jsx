import React from 'react';


import './index.less'

function PubHeader (props) {
  const backToHome = () => {
    window.history.back()
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

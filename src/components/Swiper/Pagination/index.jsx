import React from 'react';
import classnames from 'classnames'
import './index.less'

class Pagination extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  render () {
    let arr = new Array(this.props.len).fill(1)
    let currentIndex = this.props.currentIndex
    // console.log(arr)

    return (
      <div className='swiper-pagination'>
        <ul>
          {
            arr.map((item, index) => {
              return (
                <li className={classnames({ 'selected': currentIndex === index })} key={index}></li>
              )
            })
          }
        </ul>
      </div >
    )
  }
}


export default Pagination

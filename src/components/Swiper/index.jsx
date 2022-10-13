import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import Pagination from './Pagination'

import './index.less'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Swiper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      banners: this.props.banners
    }
  }

  handleChangeIndex = (index) => {
    // console.log(index)
    this.setState({
      index
    })
  }

  render () {
    const { index } = this.state;
    // console.log(Banner1)
    // const [index, setIndex] = useState(0)

    return (
      <div className='swiper'>
        <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          {
            this.props.banners.map((item, index) => {
              return (
                <div key={index} className='swiper-view'>
                  <img src={item} alt="" />
                </div>
              )
            })
          }

        </AutoPlaySwipeableViews>
        <Pagination dots={3} currentIndex={index} len={this.props.banners.length} />
      </div>
    );
  }
}

export default Swiper

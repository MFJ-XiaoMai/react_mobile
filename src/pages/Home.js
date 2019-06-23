import React, { Component, Fragment} from 'react';
import { Carousel } from 'antd-mobile';

import {getGoods} from '../api/index'

class Home extends Component {
  state = {
    imgHeight: 176,
    sliderlist: []
  }


  componentDidMount(){
    getGoods()  //调用函数
    .then(res=>{
      console.log(res);
      if (res.status === 0){
        //成功
        this.setState({sliderlist:res.message.sliderlist})
      }
    })
  }

  
  render() {
    console.log('render home');
    return (
      <Fragment>
        {/* 轮播图开始 */}
        <Carousel
          autoplay
          infinite
        >
          {this.state.sliderlist.map(val => (
            <a
              key={val.id}
              href="#"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.img_url}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // 留下来解决bug
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        {/* 轮播图结束 */}
      </Fragment>
    );
  }
}
 
export default Home;
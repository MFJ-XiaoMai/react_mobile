import React, { Component, Fragment } from 'react';
import { Carousel } from 'antd-mobile';

import { getGoods } from '../api/index'

class Home extends Component {
  state = {
    imgHeight: 176,
    //轮播图数组
    sliderlist: [],
    // 推荐商品数组
    toplist: [],
  }


  componentDidMount() {
    getGoods()  //调用函数
      .then(res => {
        console.log(res);
        if (res.status === 0) {
          //成功
          this.setState({
            sliderlist: res.message.sliderlist,
            toplist: res.message.toplist
          })
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
        {/* 推荐商品开始 */}
        <div className='recommend_goods'>
          <div className='recommend_goods_title'>推荐商品</div>
          <div className='recommend_goods_content'>
            {
              this.state.toplist.map(v =>
                <a href='javasrcipt:;' key={v.id} className='recommend_goods_item'>
                  <div className='recommend_img_wrap'>
                    <img src={v.img_url} alt='' />
                  </div>

                  <div className='recommend_goods_name'>
                    <p>{v.title}</p>
                  </div>
                </a>
              )}
          </div>

          <style jsx>
            {`
            .recommend_goods_title{
              padding:10px;
              background-color:#f5f5f9;
              color:#666
            }
            .recommend_goods_content{
              .recommend_goods_item{
                background-color:#fff;
                border-bottom:1px solid #666;
                display:flex;
                .recommend_img_wrap{
                  flex:1;
                  padding:20px;
                }
                .recommend_goods_name{
                  flex:6;
                  display:flex;  
                  align-items:center;
                  font-size:14px;

                  overflow:hidden; 
                  p{
                    text-overflow:ellipsis;
                    overflow:hidden;
                    white-space:nowrap;
                  }
                }
              } 
            }
            `}
          </style>
        </div>
        {/* 推荐商品结束 */}
      </Fragment>
    );
  }
}

export default Home;


//  给p标签加...的操作 
// p{
//   text - overflow: ellipsis;
//   overflow: hidden;  超出隐藏
//   white - space: nowrap;  文字不要换行
// }
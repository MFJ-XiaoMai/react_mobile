import React, { Fragment }  from 'react';

import { TabBar } from 'antd-mobile';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Mine from '../pages/Mine';


class MyLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    // 1. 首先在render里面打印this.props
    console.log(this.props);
    return (
      // 全屏显示
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          /**
           * unselectedTintColor：未选中的字体颜色
           * tintColor：选中的字体颜色
           * barTintColor：tabbar背景色
           */
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<span className='iconfont icon-home' />}
            selectedIcon={
              <span className='iconfont icon-home' />
            }
            // selected 选中与否  为true时表示该组件被选中  会根据url自行判断选中对应的组件
            selected={this.props.match.url==='/'}
            // onPress 点击事件
            // 点击底部tabbar栏里首页按钮，上面的url跟着改变
            onPress={() => { this.props.history.push('/') }}
            data-seed="logId"
          >
            {/* 插槽 动态获取该组件的内容 */}
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<span className='iconfont icon-gouwuche' />}
            selectedIcon={
              <span className='iconfont icon-gouwuche' />
            }
            title="购物车"
            key="Cart"
            badge={1}
            // selected 选中与否  为true时表示该组件被选中
            selected={this.props.match.url === '/Cart'}
            // 点击底部tabbar栏里购物车按钮，上面的url跟着改变
            onPress={() => { this.props.history.push('/Cart') }}
            data-seed="logId1"
          >
            {/* 插槽 */}
            {this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <span className='iconfont icon-weibiaoti2fuzhi12' />
            }
            selectedIcon={
              <span className='iconfont icon-weibiaoti2fuzhi12' />
            }
            title="我的"
            key="Mine"
            dot
            // selected 选中与否  为true时表示该组件被选中
            selected={this.props.match.url === '/Mine'}
            // 点击底部tabbar栏里我的按钮，上面的url跟着改变
            onPress={() => {this.props.history.push('/Mine')}}
          >
            {/* 插槽 */}
            {this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default MyLayout;

// MyLayout如何根据url的参数来显示对应的插槽
// 1. 首先在render里面打印this.props
// 2. render里面用props属性的时候要手动把props传递过去 去App.js里的路由里面的render传递props
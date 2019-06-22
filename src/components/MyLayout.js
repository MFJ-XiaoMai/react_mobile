import React, { Fragment }  from 'react';

import { TabBar } from 'antd-mobile';


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
            // selected 选中与否
            selected={this.state.selectedTab === 'blueTab'}
            // onPress 点击事件
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            home
          </TabBar.Item>
          <TabBar.Item
            icon={<span className='iconfont icon-gouwuche' />}
            selectedIcon={
              <span className='iconfont icon-gouwuche' />
            }
            title="购物车"
            key="Cart"
            badge={1}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            cart
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
            // 选中与否
            selected={this.state.selectedTab === 'greenTab'}

            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            mine
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default MyLayout;

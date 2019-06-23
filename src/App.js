import React,{ Fragment} from 'react';
import './styles/App.css';
import MyLayout from "./components/MyLayout.js";
// 导入路由组件
import { HashRouter as Router,Route} from "react-router-dom";
// 导入页面组件
import Home from './pages/Home';
import Cart from './pages/Cart';
import Mine from './pages/Mine';


class App extends React.Component {
  render(){
    return(
      <Fragment>
        <Router>
            {/* 内容 */}
            {/* 第一种渲染方式component */}
          {/* <Route path='/' exact component={Home}/>
          <Route path='/Cart' component={Cart}/>
          <Route path='/Mine' component={Mine}/>
          <Route path='/Login' /> */}
          {/* 当上面三个页面有底部tabbar，而login没有时，不能用component来渲染 */}

          {/* 第二种渲染方式render() */}
          {/* 2. render里面用props属性的时候要手动把props传递过去 以解构的方式传，这样才能拿到路由信息，否则没有*/}
          <Route path='/' exact render={(props)=><MyLayout {...props}><Home/></MyLayout>} />
          <Route path='/Cart' render={(props) => <MyLayout {...props}><Cart/></MyLayout>} />
          <Route path='/Mine' render={(props) => <MyLayout {...props}><Mine/></MyLayout>} />
        </Router>
      </Fragment>
    )
  }
}
 
export default App;

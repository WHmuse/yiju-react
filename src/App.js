import React, { Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home/Home'));
const City = React.lazy(() => import('./pages/City/City'));
const Details = React.lazy(() => import('./pages/Details/Details'));
const SearchList = React.lazy(() => import('./pages/SearchList/SearchList'));
const Shopcar = React.lazy(() => import('./pages/Shopcar/Shopcar'));
const Life = React.lazy(() => import('./pages/Life'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const Mine = React.lazy(() => import('./pages/Mine'));
const Shop = React.lazy(() => import('./pages/Shop'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>组件正在加载中...</div>}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/city' component={City} />
          <Route path='/details/:id' component={Details} />
          <Route path='/searchlist/:keyword' component={SearchList} />
          <Route path='/shopcar' component={Shopcar} />
          <Route path='/life' component={Life} />
          <Route path='/login' component={Login} />
          <Route path='/mine' component={Mine} />
          <Route path='/shop' component={Shop} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;

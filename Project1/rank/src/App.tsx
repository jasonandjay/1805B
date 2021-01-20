import React from 'react'
import RouterView from './router/RouterView';
import routes from './router/config';
import { BrowserRouter as Router } from 'react-router-dom'
// 引入全局loading
import Loading from './components/Loading';
import useStore from './context/useStore';
import { useObserver } from 'mobx-react-lite';

const App: React.FC = () => {
  let {global} = useStore();

  return useObserver(() => <Router>
    <RouterView routes={routes} />
    {global.isShow?<Loading />: null}
  </Router>)
}

export default App;
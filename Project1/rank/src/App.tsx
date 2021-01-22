import React, {useEffect} from 'react'
import RouterView from './router/RouterView';
import routes from './router/config';
import { useHistory } from 'react-router-dom'
// 引入全局loading
import Loading from './components/Loading';
import useStore from './context/useStore';
import { useObserver } from 'mobx-react-lite';

const App: React.FC = () => {
  let {global} = useStore();
  let history = useHistory();
  useEffect(()=>{
    history.listen(state=>{
      console.log('state...', state);
      // 可以在这里做导航守卫
    })
  }, [])

  return useObserver(() => <React.Fragment>
    <RouterView routes={routes} />
    {global.isShow?<Loading />: null}
  </React.Fragment>)
}

export default App;
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector, useHistory, useLocation} from 'umi'

const LoginPage:React.FC = ()=>{
  let [user_name, setUserName] = useState('chenmanjie')
  let [user_pwd, setUserPwd] = useState('Chenmanjie123!')

  // 通过useSelector拿到redux中的数据
  const {isLogin} = useSelector(models=>models.user);
  // 通过useDispatch拿到派发redux的dispatch
  const dispatch  = useDispatch();
  const history = useHistory();
  let {query: {redirect}} = useLocation() as any;


  useEffect(()=>{
    if (isLogin){
      redirect = redirect?decodeURIComponent(redirect): '/';
      history.replace(redirect)
    }
  }, [isLogin]);

  useEffect(()=>{
    dispatch({
      type: 'user/login',
      payload: {user_name, user_pwd}
    })
  }, []);

  return <div>

  </div>
}

export default LoginPage;

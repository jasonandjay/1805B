import React from 'react'
import {useLocation, NavLink} from 'react-router-dom'
import RouterView from '../router/RouterView';
import { IRouteItem } from '../utils/interface';

interface IProps{
    routes: IRouteItem[]
}
const Mine: React.FC<IProps> = (props)=>{
    let location = useLocation();
    // return <p>{JSON.stringify(location)}</p>
    return <div>
        <RouterView routes={props.routes}></RouterView>
        <footer>
            <NavLink to="/main/index">首页</NavLink>
            <NavLink to="/main/classify">分类</NavLink>
            <NavLink to="/main/message">消息</NavLink>
            <NavLink to="/main/mine">我的</NavLink>
        </footer>
    </div>
}

export default Mine;
// 引入一级路由
import Login from '../views/Login'
import Main from '../views/Main'

// 引入二级路由
import Index from '../views/main/Index'
import Classify from '../views/main/Classify'
import Message from '../views/main/Message'
import Mine from '../views/main/Mine'
import { Redirect } from 'react-router-dom';

const routes = [{
    path: '/login',
    component: Login
}, {
    path: '/main',
    component: Main,
    children: [{
        path: '/main/index',
        component: Index
    }, {
        path: '/main/classify',
        component: Classify
    }, {
        path: '/main/message',
        component: Message
    }, {
        path: '/main/mine',
        component: Mine
    }, {
        path: '/main',
        redirect: '/main/index'
    }]
}, {
    path: '/',
    redirect: '/main'
}]

export default routes;
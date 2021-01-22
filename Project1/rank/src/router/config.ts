import React from 'react'
// 引入一级路由
// import Login from '../views/Login'
// import Main from '../views/Main'
// import Search from '../views/Search';
// import RankDetail from '../views/RankDetail';
// import ArticleDetail from '../views/ArticleDetail';
const Login = React.lazy(() => import('../views/Login'));
const Main = React.lazy(() => import('../views/Main'));
const Search = React.lazy(() => import('../views/Search'));
const RankDetail = React.lazy(() => import('../views/RankDetail'));
const ArticleDetail = React.lazy(() => import('../views/ArticleDetail'));



// 引入二级路由
// import Index from '../views/main/Index'
// import Classify from '../views/main/Classify'
// import Message from '../views/main/Message'
// import Mine from '../views/main/Mine'
const Index = React.lazy(() => import('../views/main/Index'));
const Classify = React.lazy(() => import('../views/main/Classify'));
const Message = React.lazy(() => import('../views/main/Message'));
const Mine = React.lazy(() => import('../views/main/Mine'));


const routes = [{
    path: '/login',
    component: Login
}, {
    path: '/search',
    component: Search
}, {
    path: '/rankDetail',
    component: RankDetail
}, {
    path: '/articleDetail',
    component: ArticleDetail
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
import React from 'react';
import {Switch, Route, Redirect, RouteComponentProps} from 'react-router-dom';
import { IRouteItem } from '../utils/interface';

interface IProps{
    routes: IRouteItem[]
}
const RouterView: React.FC<IProps> = (props)=>{
return <Switch>{
    props.routes.map((item, index)=>{
        if (item.redirect){
            return <Redirect from={item.path} to={item.redirect} key={index}/>
        }
        return <Route path={item.path} key={index} render={(routerProps: RouteComponentProps)=>{
            if (item.children){
                return <item.component {...routerProps} routes={item.children}></item.component>
            }else{
                return <item.component {...routerProps}/>
            }
        }}></Route>
    })}</Switch>
}

export default RouterView;
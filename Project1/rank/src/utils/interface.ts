import { RouteComponentProps } from "react-router-dom";

export interface IRouteItem{
    path: string,
    component?: any,
    // component?: React.FC<RouteComponentProps & {routes?: IRouteItem[]}>,
    redirect?: string,
    children?: IRouteItem []
}

export interface INavItem{
    id: string,
    name: string
}

export interface ICarouselItem{
    image: string,
    ranksId: string,
    [key:string]: string
}

export interface IRankItem{
    image: string,
    name: string,
    id: string
}

export interface IMessageItem{
    messageType: string,
    correlation: string,
    unread: string,
    sendDate: string,
    id: string,
    title: string,
    url: string
}
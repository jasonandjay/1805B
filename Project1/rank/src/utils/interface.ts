// import { RouteComponentProps } from react-router-dom;

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

export interface IUserInfo{
    mid: string,
    nickname: string,
    avatar: string
}

export interface IMobileInfo{
    authCode: string,
    mobile: string
}

export interface ISearchRankItem{
    image: string,
    name: string,
    id: string
}

export interface ISearchArticleItem{
    image: string,
    score: number,
    articleType: string,
    nickname: string,
    official: string,
    stick: string,
    id: string,
    avatar: string,
    tag: string,
    title: string
    url: string
}
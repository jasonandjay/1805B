import { RouteComponentProps } from "react-router-dom";

export interface IRouteItem{
    path: string,
    component?: any,
    // component?: React.FC<RouteComponentProps & {routes?: IRouteItem[]}>,
    redirect?: string,
    children?: IRouteItem []
}
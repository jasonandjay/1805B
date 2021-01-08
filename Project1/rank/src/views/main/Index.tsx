import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import {getIndexNav} from '../../services/index'
import { INavItem } from '../../utils/interface';

const Mine: React.FC = ()=>{
    let [list, setList] = useState<INavItem []>([]);
    let [curNav, setCurNav] = useState<string>('');

    useEffect(()=>{
        getIndexNav().then(res=>{
            // debugger;
            setList(res.data.rankCategoryList);
        })
    }, []);

    function clickNav(e: React.MouseEvent){
        if (e.target !== e.currentTarget){
            let id = (e.target as HTMLElement).dataset.id;
            setCurNav(id);
        }
    }

    let location = useLocation();
    return <div>
        <section onClick={clickNav}>{
            list.map(item=>{
            return <li className={curNav === item.id?'active':''} key={item.id} data-id={item.id}>{item.name}</li>
            })
            }</section>    
    </div>
}

export default Mine;
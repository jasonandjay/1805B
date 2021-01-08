import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getIndexNav, getCarouselList, getRankList } from '../../services/index'
import { INavItem, ICarouselItem, IRankItem } from '../../utils/interface';

const Mine: React.FC = () => {
    let [list, setList] = useState<INavItem[]>([]);
    let [curNav, setCurNav] = useState<string>('');
    let [carouseList, setcarouseList] = useState<ICarouselItem[]>([]);
    let [rankList, setRankList] = useState<IRankItem[]>([]);

    useEffect(() => {
        getIndexNav().then(res => {
            setList(res.data.rankCategoryList);
        })

        getCarouselList().then(res => {
            setcarouseList(res.data.carouselList);
        })

        getRankList().then(res => {
            setRankList(res.data.dataList);
        })
    }, []);

    function clickNav(e: React.MouseEvent) {
        if (e.target !== e.currentTarget) {
            let id = (e.target as HTMLElement).dataset.id;
            setCurNav(id);
        }
    }

    // let location = useLocation();
    return <div>
        {/* 顶部导航 */}
        <section onClick={clickNav}>{
            list.map(item => {
                return <li className={curNav === item.id ? 'active' : ''} key={item.id} data-id={item.id}>{item.name}</li>
            })
        }</section>
        {/* 当前分类轮播 */}
        <section>{
            carouseList.map(item => {
                return <img src={item.image} key={item.ranksId} alt="" />
            })
        }</section>
        {/* 当前分类 */}
        <section>{
            rankList.map(item => {
                return <li key={item.id}>
                    <img src={item.image} alt="" />
                    <span>{item.name}</span>
                </li>
            })}</section>
    </div>
}

export default Mine;
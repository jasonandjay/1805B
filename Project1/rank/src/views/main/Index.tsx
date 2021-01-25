import React, { useEffect, useState, useRef  } from 'react'
// import { useLocation } from 'react-router-dom'
import { getIndexNav, getCarouselList, getRankList } from '../../services/index'
import { INavItem, ICarouselItem, IRankItem } from '../../utils/interface';
import styles from './Index.module.scss'
import {useHistory} from 'react-router-dom'

import LazyLoad from '../../utils/lazyLoad'


const Mine: React.FC = () => {
    let [list, setList] = useState<INavItem[]>([]);
    let [curNav, setCurNav] = useState<string>('');
    let [carouseList, setcarouseList] = useState<ICarouselItem[]>([]);
    let [rankList, setRankList] = useState<IRankItem[]>([]);
    let wrap = useRef();
    let history = useHistory();

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

    useEffect(()=>{
        if (carouseList.length && rankList.length){
            new LazyLoad();
        }
    }, [carouseList, rankList])

    function clickNav(e: React.MouseEvent) {
        if (e.target !== e.currentTarget) {
            let ele = e.target as HTMLElement;
            let id = ele.dataset.id;
            setCurNav(id);
            // 让该元素居中
            let offsetLeft = ele.offsetLeft;
            let centerOffsetLeft = (window.innerWidth - ele.clientWidth)/2;
            let totalLeft = offsetLeft - centerOffsetLeft;
            let initail = (wrap.current as HTMLElement).scrollLeft,
                step = (totalLeft - initail)/10;
            let inter = setInterval(()=>{
                (wrap.current as HTMLElement).scrollLeft = initail = initail + step;
                // debugger;
                if (Math.abs(initail - totalLeft) < 1){
                    window.clearInterval(inter);
                }
            }, 10);
        }
    }

    // let location = useLocation();
    return <div className={styles.wrap}>
        {/* 搜索框 */}
        <p onClick={()=>history.push('/search')}>点击搜索</p>
        {/* 顶部导航 */}
        <section className={styles.navWrap} ref={wrap}>
            <ul onClick={clickNav} className={styles.nav}>{
                list.map(item => {
                    return <li className={curNav === item.id ? styles.active : ''} key={item.id} data-id={item.id}>{item.name}</li>
                })
            }</ul>
        </section>

        {/* 当前分类轮播 */}
        <section>{
            carouseList.map(item => {
                return <img data-src={item.image} key={item.ranksId} alt="" />
            })
        }</section>
        {/* 当前分类 */}
        <section>{
            rankList.map(item => {
                return <li key={item.id}>
                    <img data-src={item.image} alt="" />
                    <span>{item.name}</span>
                </li>
            })}</section>
    </div>
}

export default Mine;
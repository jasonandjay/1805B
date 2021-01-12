import React from 'react'
import loading from '../assets/loading.gif'
import styles from './Loading.module.scss'

interface IProps{
    hasMask?: boolean
}
const Loading: React.FC<IProps> = (props)=>{
    return <div className={styles.wrap}>
        {props.hasMask?<div></div>:null}
        <img src={loading} alt=""/>
    </div>
}

export default Loading;
import React, { useState, useEffect, MouseEvent } from 'react'
import jsonp from 'jsonp'
import axios from 'axios'

interface IProps {
    setContent: React.Dispatch<React.SetStateAction<string>>
}

function throttle(fn: () => void, delay = 500) {
    let start = +new Date;
    return function () {
        let now = +new Date;
        if (now - start > delay) {
            fn();
            start = now;
        }
    }
}

const Header: React.FC<IProps> = (props) => {
    let [text, setText] = useState<string>('')
    let [suggest, setSuggest] = useState<{ q: string }[]>([])

    let getSuggestion = () => {
        jsonp(`https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&req=2&csor=2&wd=${encodeURIComponent(text)}`, {
        }, (err, result) => {
            if (result) {
                let { g: suggest } = result;
                // debugger;
                // console.log('suggest...', suggest)
                suggest && setSuggest(suggest);
            }
        })
    }

    function changeText(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
        getSuggestion();
    }

    async function clickItem(e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>){
        if (e.target !== e.currentTarget){
            let text = (e.target as HTMLLIElement).innerText
            let result = await axios.get(`/api?ie=utf-8&mod=1&isbd=1&isid=b36c512200191710&ie=utf-8&f=3&rsv_bp=1&tn=02003390_43_hao_pg&wd=${encodeURIComponent(text)}&oq=%25E5%2585%25AB%25E7%25BB%25B4&rsv_pq=b36c512200191710&rsv_t=a092taGt1hAueld%2ByWFg%2FkqBJ7IrcKysarjIwaP8gjoV6uE2gG47DX7tLtNgciSnLtYWG0shk9E%2F&rqlang=cn&rsv_enter=0&rsv_dl=ts_1&rsv_btype=t&rsv_sug3=2&rsv_sug1=4&rsv_sug7=100&rsv_sug2=1&prefixsug=%25E5%2585%25AB&rsp=1&inputT=2230370&rsv_sug4=2231192&bs=%E5%85%AB%E7%BB%B4&rsv_sid=undefined&_ss=1&clist=&hsug=&f4s=1&csor=10&_cr1=41947`)
            debugger;
        }
    }


    return <div>
        <section>
            <input type="text" value={text} onChange={changeText} />
        </section>
        <section onClick={clickItem}>{
            suggest.map((item: { q: string }) => {
                return <li key={item.q}>{item.q}</li>
            })
        }</section>
    </div>
}

export default Header;
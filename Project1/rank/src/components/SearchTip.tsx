import React from 'react'

interface IProps{
    list: string [],
    obj: {},
    cb: ()=>void
}
const SearchTip: React.FC<IProps> = ()=>{
    console.log('search tip component');
    return <div>关键词提示</div>
}

export default SearchTip;
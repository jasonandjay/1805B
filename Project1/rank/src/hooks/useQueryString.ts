import React from 'react'

const QueryString = (query: string, key?:string)=>{
    query = query.slice(1);
    let arrs = query.split('&');
    let obj = {};
    arrs.forEach((item)=>{
        let temp = item.split('=');
        obj[temp[0]] = temp[1]
    })
    return key?obj[key]: obj;
}

export default QueryString
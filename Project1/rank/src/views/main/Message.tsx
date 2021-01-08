import React from 'react'
import {useLocation} from 'react-router-dom'

const Mine: React.FC = ()=>{
    let location = useLocation();
    return <p>{JSON.stringify(location)}</p>
}

export default Mine;
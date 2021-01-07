import React from 'react'

interface IProps{
    content: string
}

const Body: React.FC<IProps> = (props)=>{
    return <div dangerouslySetInnerHTML={{__html: props.content}}></div>
}

export default Body;
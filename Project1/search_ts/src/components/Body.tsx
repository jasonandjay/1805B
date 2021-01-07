import React, {useState, useEffect} from 'react'

interface IProps{
    setContent: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<IProps> = (props)=>{
    let [text, setText] = useState<string>('')

    function changeText(e: React.ChangeEvent<HTMLInputElement>){
        setText(e.target.value);
    }

    return <div>
        <section>
            <input type="text" value={text} onChange={changeText}/>
        </section>
    </div>
}

export default Header;
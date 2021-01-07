function List(props) {
    return <div>{
        props.list.map((item, index) => {
            return <li key={item.id}>
                <span>{index}</span>
                <input type="checkbox" checked={item.checked} onChange={()=>props.changeCheck(item.id)}/>
                <img src={item.img} />
                <span>价格：${item.price}</span>
                <div>
                    <button onClick={()=>props.changeNum(item.id, '+')}>+</button>
                    <span>{item.num}</span>
                    <button onClick={()=>props.changeNum(item.id, '-')}>-</button>
                </div>
            </li>
        })
    }</div>;
}

export default List;